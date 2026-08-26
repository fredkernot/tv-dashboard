import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-1 flex-col justify-center">
            <h2 className="kick text-fg">Go to /tv for the tv</h2>
            <a href="/tv" className="text-statement text-fg">TV PAGE</a>
        
        </div>
      </main>
    </div>
  );
}
