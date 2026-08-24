import z from "zod";
import type { TriviaSlide } from "../types/slides.ts";

const TriviaSchema = z.object({
    text: z.string(),
    source: z.string(),
});

type TriviaResponse = z.infer<typeof TriviaSchema>;

export async function getTriviaInfo(): Promise<TriviaSlide> {
    const url = "https://uselessfacts.jsph.pl/api/v2/facts/today?language=en";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Request failed: ${response.status}`);
        }
        const data: TriviaResponse = TriviaSchema.parse(
            await response.json(),
        );

        const entries = [{
            fact: data.text,
            source: data.source,
        }];

        return { kind: "trivia", entries };
    } catch (error) {
        console.error(
            "Failed to fetch daily trivia:",
            error instanceof Error ? error.message : error,
        );
            return {
                kind: "trivia",
            entries: [{ fact: "Trivia unavailable", source: "" }],
            };
    }
}

getTriviaInfo().then((trivia) => console.log(trivia));
