


interface TriviaSlide {
    kind: "trivia";
    description: string;
}

interface BirthdaySlide {
    kind: "birthday";
    description: string;
    date: Date;
}

interface SysStatusSlide {
    kind: "status";
    description: string;
}

interface MetricsSlide {
    kind: "metrics";
    description: string;
}

type Slide = TriviaSlide | BirthdaySlide | SysStatusSlide | MetricsSlide

export function getSlideTitle(slide: Slide): string {
    switch (slide.kind) {
        case "trivia":
            return "Trivia";
        case "birthday":
            return "Today's Birthdays & Anniversaries";
        case "status":
            return "System Status";
        case "metrics":
            return "Key Metrics";
    }
}

