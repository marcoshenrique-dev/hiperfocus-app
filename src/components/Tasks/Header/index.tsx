
import { Tag } from "@/components/Tag";
import { languageContext } from "@/hooks/LanguageContext";
import homeTranslation from "@/translations/home";

import { useContext, useState } from "react";

type HeaderProps = {
  onAddTask(value: string): void;
  totalTasks: {
    total: number;
    todo: number;
  }
}

export const Header = ({onAddTask, totalTasks}: HeaderProps) => {
  const [description, setDescription] = useState('');
  const {language} = useContext(languageContext);

  return (
    <div className="py-5 border-b border-slate-300 dark:border-slate-700 ">

      <section className="flex flex-row justify-between">
        <h3 className="font-bold">{homeTranslation[language].tasks.header}</h3>
        <Tag bgColor="yellow-400" textColor="black">{totalTasks.todo}/{totalTasks.total}</Tag>
      </section>

      <section className="w-full mt-5" >
        <input value={description} onChange={e => setDescription(e.target.value)} className="w-full dark:bg-slate-950 rounded-lg border dark:border-gray-400 text-sm px-2 py-2" placeholder={homeTranslation[language].tasks.placeholder} />
        <button className="w-full bg-yellow-400 dark:bg-yellow-500 text-black rounded-lg py-2 font-bold text-sm mt-2" onClick={() => onAddTask(description)} >{homeTranslation[language].tasks.button}</button>
      </section>
    </div>
  );
}
