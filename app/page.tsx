import Link from "next/link";
import { RoundWordmark } from "@/components/brand/RoundLogo";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col justify-between px-16 py-12">
      <header>
        <RoundWordmark tone="white" height="1.6rem" />
      </header>

      <main className="max-w-3xl py-16">
        <p className="kick text-muted">Office dashboard</p>
        <h1 className="text-statement text-fg">
          The wall display for the Round office
        </h1>
        <p className="text-lead mt-8 text-muted">
          A rotating board of company info, trivia, birthdays and employee of the month.
        </p>
        <Link href="/tv" className="btn btn-primary mt-12">
          Open the dashboard
        </Link>
      </main>

      <footer className="text-caption text-muted">
        Internal tool. Round Treasury Limited.
      </footer>
    </div>
  );
}
