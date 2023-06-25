'use client'

import { languageContext } from "@/hooks/LanguageContext";
import { tasksContext } from "@/hooks/TasksContext";
import homeTranslation from "@/translations/home";
import { PauseIcon, PlayIcon, XMarkIcon } from "@heroicons/react/24/solid";

import { useContext, useEffect, useState } from "react";
import { ButtonDefault as Button } from "../Button";
import { EmptyRunning } from "../Empty";

import { Display } from "./Display"

export const Counter = () => {

  const [time, setTime] = useState('1h');
  const [startTime, setStartTime] = useState(60 * 60);

  const {setTaskRunning, taskRunning, updateStatus} = useContext(tasksContext);
  const {language} = useContext(languageContext);

  useEffect(() => {
    setStartTime(time === '1h' ? 60 * 60 : 60 * 30);
  }, [time]);

  function setRunning(id: string, value: boolean) {
    updateStatus({
      id,
      running: value,
    });

    if(taskRunning) {
      const updatedTaskRunning = {...taskRunning};

      updatedTaskRunning.running = value;
  
      setTaskRunning(updatedTaskRunning);
    }

  }

  function cancelTask() {
    if(taskRunning) {
      updateStatus({
        id: taskRunning.id,
        running: false,
      });
  }

    setTaskRunning(null);
  }
  
  return (
    <div>
      
      {taskRunning ? (
        <>
          <div className='flex flex-row border border-slate-300 dark:border-slate-700 rounded-full p-1 mb-8'>
          <button onClick={() => setTime('1h')} className={`w-3/6 border-r border-slate-300 dark:border-slate-700 hover:opacity-50 ${time === '1h' ? 'text-black dark:text-white' : 'text-slate-300 dark:text-slate-700'}`}>1h</button>
          <button onClick={() => setTime('30m')} className={`w-3/6 hover:opacity-50 ${time === '30m' ? 'text-black dark:text-white' : 'text-slate-300 dark:text-slate-700'}`}>30m</button>
        </div>

        <Display id={taskRunning.id} isPlaying={taskRunning.running} setIsPlaying={setRunning} startTime={startTime}/>

        <h2 className="text-lg font-semibold mt-4">{homeTranslation[language].counter.message}</h2>
        <h1 className="text-xl font-medium mt-1">{homeTranslation[language].counter.task} <span className="text-xl font-bold">{taskRunning.description}</span></h1>

        <div className="flex flex-row gap-x-10 mt-8">
          <Button onClick={() => setRunning(taskRunning.id, !taskRunning.running)} variant="primary" rightIcon={taskRunning.running ? <PauseIcon className="h-5 w-5"/> : <PlayIcon  className="h-5 w-5"/>}>
            {taskRunning.running ? 
              homeTranslation[language].counter.pause 
              : homeTranslation[language].counter.start
            }
            </Button>
          <Button onClick={cancelTask}  variant="red" rightIcon={<XMarkIcon className="h-5 w-5"/>}>{homeTranslation[language].counter.cancel}</Button>
          </div>
        </>
      ): (
        <EmptyRunning />
      )}
    </div>
  );
}
