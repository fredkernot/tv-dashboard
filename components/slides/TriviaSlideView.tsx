import { getSlideTitle, type TriviaSlide } from "@/types/slides";

interface TriviaSlideViewProps {
    slide: TriviaSlide;
}

export function TriviaSlideView({ slide }: TriviaSlideViewProps) {
    return (
        <section className="flex h-full flex-col justify-center border border-line bg-panel p-16">
            <h2 className="kick text-neon">{getSlideTitle(slide)}</h2>
            <ul className="space-y-10">
                {slide.entries.map((entry, i) => (
                    <li key={i}>
                        <p className="text-h1 text-fg">{entry.fact}</p>
                        {entry.source ? (
                            <p className="mt-6 text-caption text-muted">{entry.source}</p>
                        ) : null}
                    </li>
                ))}
            </ul>
        </section>
    );
}
