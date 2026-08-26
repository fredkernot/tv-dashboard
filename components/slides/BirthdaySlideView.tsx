import { getSlideTitle, type BirthdaySlide } from "@/types/slides";

interface BirthdaySlideViewProps {
    slide: BirthdaySlide;
}

export function BirthdaySlideView({ slide }: BirthdaySlideViewProps) {
    return (
        <section className="flex h-full flex-col justify-center border border-line bg-panel p-16">
            <h2 className="kick text-neon">{getSlideTitle(slide)}</h2>
            <ul className="space-y-10">
                {slide.entries.map((entry, i) => (
                    <li key={i}>
                        <p className="text-h2 text-fg">{entry.text}</p>
                        <p className="text-h3 text-fg">Born: {entry.year}</p>
                        
                    </li>
                ))}
            </ul>
        </section>
    );
}
