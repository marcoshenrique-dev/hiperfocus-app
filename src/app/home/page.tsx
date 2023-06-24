import { Counter } from "@/components";
import { Tasks } from "@/components/Tasks";

export default async function Home() {
  return (
    <main className="flex flex-1 flex-row items-top justify-between w-full pt-20 p-0 bg-slate-50 dark:bg-slate-950">

      <section className="flex flex-col w-8/12 h-full items-center text-center mt-10">
        <Counter/>
      </section>

      <section className="flex flex-col w-4/12 h-full bg-gray-100 dark:bg-slate-950 border-l border-slate-300 dark:border-slate-700">
          <Tasks/>
      </section>
    </main>
  )
}