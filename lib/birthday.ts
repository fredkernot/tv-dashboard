

import { z } from "zod";
import type { BirthdaySlide } from "../types/slides.ts";
import Anthropic from "@anthropic-ai/sdk";
import { zodOutputFormat } from "@anthropic-ai/sdk/helpers/zod.mjs";

const BirthdaySchema = z.object({
    year: z.string(),
    text: z.string(),
});

const MuffinLabsResponseSchema = z.object({
    data: z.object({
        Births: z.array(BirthdaySchema),
    }),
});

type MuffinLabsResponse = z.infer<typeof MuffinLabsResponseSchema>;

type Birthday = z.infer<typeof BirthdaySchema>;

async function pickMostInterestingBirthday(birthdays: Birthday[]): Promise<Birthday> {
    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
    const message = await client.messages.parse({
        model: "claude-sonnet-5",
        max_tokens: 256,
        thinking: { type: "disabled" },
        messages: [
            {
                role: "user",
                content: 
//`Choose the most famous person's birthday from this list. Return the exact year and text of one candidate. Do not invent or edit any details.${JSON.stringify(birthdays)}`,
`Choose the most interesting birthday for a software-focused fintech startup from this list. Return the exact year and text of one candidate. Do not invent or edit any details.${JSON.stringify(birthdays)}`,
            },
        ],
        output_config: { format: zodOutputFormat(BirthdaySchema) },
    });

    if (!message.parsed_output) {
        throw new Error("Claude returned no parsed birthday selection");
    }

    return message.parsed_output;
}

export async function getBirthdayInfo(): Promise<BirthdaySlide> {
    
    const [, month, day] = new Date()
        .toLocaleDateString("en-CA", { timeZone: "Europe/London" })
        .split("-");

        const url = `https://history.muffinlabs.com/date/${month}/${day}`;
        
        try{
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Request failed: ${response.status}`);
            }
            const data: MuffinLabsResponse = MuffinLabsResponseSchema.parse(
                JSON.parse(await response.text()),
            );
            const entries = data.data.Births.map((birthday) => ({
                year: birthday.year,
                text: birthday.text,

            }));
            if (!process.env.ANTHROPIC_API_KEY) {
                return { kind: "birthday", entries };
            }

            try {
                const selectedBirthday = await pickMostInterestingBirthday(entries);
                return { kind: "birthday", entries: [selectedBirthday] };
            } catch (error) {
                console.error(
                    "Failed to select birthday with Claude:",
                    error instanceof Error ? error.message : error,
                );
                return { kind: "birthday", entries };
            }
        } catch (error) {
            console.error("Failed to fetch birthdays:", error instanceof Error ? error.message : error);
            return {
                kind: "birthday",
                entries: [{ year: "____", text: "Birthdays unavailable"}],
            };
        }
}
