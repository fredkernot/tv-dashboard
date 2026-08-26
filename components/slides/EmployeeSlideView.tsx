import { getSlideTitle, type EmployeeSlide } from "@/types/slides";

interface EmployeeSlideViewProps {
    slide: EmployeeSlide;
}

export function EmployeeSlideView({ slide }: EmployeeSlideViewProps) {
    return (
        <section className="flex h-full gap-16 border border-line bg-panel p-16">
            <div className="flex flex-1 flex-col justify-center">
                <h2 className="kick text-neon">{getSlideTitle(slide)}</h2>
                <p className="text-statement text-fg">{slide.name}</p>
            </div>

            <img src={slide.photo} alt={slide.name} className="w-88 shrink-0 self-stretch object-cover" />
        </section>
    );
}
