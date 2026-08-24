


export interface BirthdaySlide {
    kind: "birthday";
    entries: { year: string; text: string}[];
}

export interface TriviaSlide {
    kind: "trivia";
    entries: { fact: string; source: string}[];
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

