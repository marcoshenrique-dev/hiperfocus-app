import { Counter } from "@/components";
import { TasksDisclosure } from "@/components/Disclosure/inde";
import { Tasks } from "@/components/Tasks";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex flex-1 flex-col sm:flex-row items-top sm:justify-between w-full pt-20 p-0 bg-slate-50 dark:bg-slate-950">

      <section className="flex sm:hidden w-full h-auto flex-col">
          <TasksDisclosure>
            <Tasks />
          </TasksDisclosure>
      </section>

      <section className="flex flex-col w-full sm:w-8/12 items-center text-center mt-10 bg-slate-50 dark:bg-slate-950 pb-20 sm:pb-0">
        <Counter/>
      </section>

      <section className="hidden sm:flex flex-col w-full sm:w-4/12 h-full bg-gray-100 dark:bg-slate-950 border-l border-slate-300 dark:border-slate-700">
          <Tasks/>
      </section>

      <section className="fixed bottom-0 pb-2 pt-2 left-0 sm:hidden flex flex-col justify-center items-center w-full bg-slate-50/80 dark:bg-slate-950/50 backdrop-blur-sm">
        <Link className='flex' href='https://www.buymeacoffee.com/mhdev'>
        <p className="font-bold">Made with 💙 by MHDEV</p>
        </Link>
      </section>

    </main>
  )
}