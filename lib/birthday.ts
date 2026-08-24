import z from "zod";
import type { BirthdaySlide } from "../types/slides.ts";

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

export async function getBirthdayInfo(): Promise<BirthdaySlide> {
    const currentDate = new Date()
        const month = currentDate.getMonth() + 1;
        const day = currentDate.getDate();

        const url = `https://history.muffinlabs.com/date/${month}/${day}`;
        
        try{
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Request failed: ${response.status}`);
            }
            const data: MuffinLabsResponse = MuffinLabsResponseSchema.parse(
                await response.json(),
            );
            const randomBirthdays = [...data.data.Births]
                .sort(() => Math.random() - 0.5)
                .slice(0, 9)
                .sort((firstBirthday, secondBirthday) =>
                    Number(firstBirthday.year) - Number(secondBirthday.year)
                );

            const entries = randomBirthdays.map((birthday) => ({
                year: birthday.year,
                text: birthday.text,

            }));
            return { kind: "birthday", entries };
        } catch (error) {
            console.error("Failed to fetch birthdays:", error instanceof Error ? error.message : error);
            return {
                kind: "birthday",
                entries: [{ year: "____", text: "Birthdays unavailable"}],
            };
        }
}

    getBirthdayInfo()
        .then((birthday) => console.log(birthday));