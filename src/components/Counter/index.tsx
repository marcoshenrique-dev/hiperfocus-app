'use client'

import { PauseIcon, PlayIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { ButtonDefault as Button } from "../Button";

import { Display } from "./Display"

export const Counter = () => {

  const [time, setTime] = useState('1h');
  const [startTime, setStartTime] = useState(60 * 60);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setStartTime(time === '1h' ? 60 * 60 : 60 * 30);
  }, [time]);

  return (
    <div>
      
      <div className='flex flex-row border border-slate-300 dark:border-slate-700 rounded-full p-1 mb-8'>
        <button onClick={() => setTime('1h')} className={`w-3/6 border-r border-slate-300 dark:border-slate-700 hover:opacity-50 ${time === '1h' ? 'text-black dark:text-white' : 'text-slate-300 dark:text-slate-700'}`}>1h</button>
        <button onClick={() => setTime('30m')} className={`w-3/6 hover:opacity-50 ${time === '30m' ? 'text-black dark:text-white' : 'text-slate-300 dark:text-slate-700'}`}>30m</button>
      </div>

      <Display isPlaying={isPlaying} setIsPlaying={setIsPlaying} startTime={startTime}/>

      <h2 className="text-lg font-semibold mt-4">Stay focused</h2>
      <h1 className="text-xl font-medium mt-1">Running <span className="text-xl font-bold">Plan app mobile</span></h1>

      <div className="flex flex-row gap-x-10 mt-8">
        <Button onClick={() => setIsPlaying(prevstate => !prevstate)} variant="primary" rightIcon={isPlaying ? <PauseIcon className="h-5 w-5"/> : <PlayIcon  className="h-5 w-5"/>}>{isPlaying ? 'Pause': 'Start'}</Button>
        <Button onClick={() => setStartTime(0)}  variant="red" rightIcon={<XMarkIcon className="h-5 w-5"/>}>Cancel</Button>
      </div>
    </div>
  );
}
