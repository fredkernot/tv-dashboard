


export interface BirthdaySlide {
    kind: "birthday";
    entries: { year: string; text: string}[];
}

export interface TriviaSlide {
    kind: "trivia";
    entries: { fact: string; source: string}[];
}

export interface SysStatusSlide {
    kind: "status";
    description: string;
}

export interface MetricsSlide {
    kind: "metrics";
    description: string;
}

export interface EmployeeSlide {
    kind: "employee";
    name: string;
    photo: string;
}

export interface BrainSlide {
    kind: "brain";
    info: string;
    photo: string;
}

export type Slide = TriviaSlide | BirthdaySlide | SysStatusSlide | MetricsSlide | EmployeeSlide | BrainSlide

export function getSlideTitle(slide: Slide): string {
    switch (slide.kind) {
        case "trivia":
            return "Trivia";
        case "birthday":
            return "Today's Birthdays";
        case "status":
            return "System Status";
        case "metrics":
            return "Key Metrics";
        case "employee":
            return "Employee of the Month";
        case "brain":
            return "Round Brain"
    }
}

