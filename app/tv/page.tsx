import { RoundWordmark } from "@/components/brand/RoundLogo";
import { SlideRotator } from "@/components/SlideRotator";
import { getTriviaInfo } from "@/lib/trivia";
import { getBirthdayInfo } from "@/lib/birthday";
import type { Slide } from "@/types/slides";

export default async function TvPage() {
    const trivia = await getTriviaInfo();
    const birthday = await getBirthdayInfo();

    const slides: Slide[] = [
        trivia,
        birthday,
        { kind: "employee", name: "Hayyaan Ahmad", photo: "/hayyaan.jpg"},
        { kind: "status", description: "1" },
        { kind: "metrics", description: "1" },
        { kind: "brain", info: "the round brain thinks this .....", photo: "/brain_100.png"}
    ];

    const dateOptions = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        // hour: "numeric",
        // minute: "numeric",
    } as const;
    const date = new Date().toLocaleString("en-GB", dateOptions);

    return (
        <main className="tv-canvas flex flex-col bg-canvas text-fg px-16 py-12">
            <header className="flex items-baseline justify-between border-b border-line pb-8">
                <RoundWordmark tone="white" height="1.6rem" />
                <p className="text-lead text-muted">{date}</p>
            </header>

            <div className="flex-1 pt-12">
                <SlideRotator slides={slides} />
            </div>
        </main>
    );
}