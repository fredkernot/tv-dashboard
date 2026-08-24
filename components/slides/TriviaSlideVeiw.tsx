import { getSlideInfo, type TriviaSlide, type BirthdaySlide } from "@/types/slides";

interface TriviaSlideViewProps {
    slide: TriviaSlide;
}

export function TriviaSlideView({ slide }: TriviaSlideViewProps) {
    return (
        <div>
            {getSlideInfo(slide)}

        </div>
    )
}