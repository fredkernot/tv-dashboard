"use client";
import { useEffect, useState } from "react";
import { getSlideTitle, type Slide } from "@/types/slides";
import { TriviaSlideView } from "./slides/TriviaSlideView";
import { BirthdaySlideView } from "./slides/BirthdaySlideView";
import { EmployeeSlideView } from "./slides/EmployeeSlideView";
import { BrainSlideView } from "./slides/BrainSlideView";

interface SlideRotatorProps {
    slides: Slide[];
    intervalMs?: number;
}

export function SlideRotator({ slides, intervalMs = 5_000 }: SlideRotatorProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((i) => (i + 1) % slides.length);
        }, intervalMs);
        return () => clearInterval(timer);
    }, [slides.length, intervalMs]);

    const current = slides[index];

    switch (current.kind) {
        case "trivia":
            return <TriviaSlideView slide={current} />;
        case "birthday":
            return <BirthdaySlideView slide={current} />
        case "employee":
            return <EmployeeSlideView slide={current} />
        case "brain":
            return <BrainSlideView slide={current} />
        default:
            return (
                <section className="flex h-full flex-col justify-center border border-line bg-panel p-16">
                    <h2 className="kick text-muted">{getSlideTitle(current)}</h2>
                    <p className="text-h2 text-muted">Coming soon</p>
                </section>
            );
    }
}
