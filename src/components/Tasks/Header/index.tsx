
import { Tag } from "@/components/Tag";

type HeaderProps = {
  onAddTask(value: string): void;
}

export const Header = ({onAddTask}: HeaderProps) => {
  return (
    <div className="py-5 border-b border-slate-300 dark:border-slate-700 ">

      <section className="flex flex-row justify-between">
        <h3 className="font-bold">Task manegment</h3>
        <Tag bgColor="yellow-400" textColor="black">2/10</Tag>
      </section>

      <section className="w-full mt-5" >
        <input className="w-full dark:bg-slate-950 rounded-lg border dark:border-gray-400 text-sm px-2 py-2" placeholder="Description for your task" />
        <button className="w-full bg-yellow-400 dark:bg-yellow-500 text-black rounded-lg py-2 font-bold text-sm mt-2" onClick={() => onAddTask('teste 123')} >Add task</button>
      </section>
    </div>
  );
}
