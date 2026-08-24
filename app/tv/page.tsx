import { RoundWordmark } from "@/components/brand/RoundLogo";
import { getBirthdayInfo } from "@/lib/birthday";
import { getTriviaInfo } from "@/lib/trivia";

export default async function TvPage() {
    const birthday = await getBirthdayInfo();
    const trivia = await getTriviaInfo();
    const dateOptions = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
    } as const;
    const date = new Date().toLocaleString("en-GB", dateOptions);

    return (
        <main className="tv-canvas flex flex-col bg-canvas text-fg px-16 py-12">
            <header className="flex items-baseline justify-between border-b border-line pb-8">
                <RoundWordmark tone="white" height="1.6rem" />
                <p className="text-lead text-muted">{date}</p>
            </header>

            <div className="grid flex-1 grid-cols-[1.4fr_1fr] gap-16 pt-12">
                <section className="flex flex-col">
                    <h2 className="kick text-fg">Born Today</h2>
                    <ul className="ruled">
                        {birthday.entries.map((entry, i) => (
                            <li key={i} className="flex gap-8">
                                <span className="w-24 shrink-0 text-card text-muted tabular-nums">
                                    {entry.year}
                                </span>
                                <span className="text-body text-fg">{entry.text}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="flex flex-col justify-center border border-line bg-panel p-12">
                    <h2 className="kick text-neon">Fact of the day</h2>
                    {trivia.entries.map((entry, i) => (
                        <div key={i}>
                            <p className="text-h2 text-fg">{entry.fact}</p>
                            {entry.source ? (
                                <p className="mt-8 text-caption text-muted">{entry.source}</p>
                            ) : null}
                        </div>
                    ))}
                </section>
            </div>
        </main>
    );
}
