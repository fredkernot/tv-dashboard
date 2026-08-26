import { getSlideTitle, type BrainSlide } from "@/types/slides";

interface BrainSlideViewProps {
    slide: BrainSlide;
}

export function BrainSlideView({ slide }: BrainSlideViewProps) {
    return (
        <section className="flex h-full gap-16 border border-line bg-panel p-16">
            <div className="flex flex-1 flex-col justify-center">
                <h2 className="kick text-neon">{getSlideTitle(slide)}</h2>
                <p className="text-statement text-fg">{slide.info}</p>

            </div>

            <img src={slide.photo} alt="" aria-hidden className="w-88 shrink-0 self-center object-contain animate-brain-pulse motion-reduce:animate-none" />
        </section>
    )
}