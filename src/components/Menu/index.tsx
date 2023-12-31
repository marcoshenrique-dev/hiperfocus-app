'use client'

import React, { useContext } from 'react';
import { useTheme } from "next-themes";
import {MoonIcon, SunIcon, ArrowPathIcon, LanguageIcon} from '@heroicons/react/24/solid';

import { Tag } from '../Tag';
import { ButtonRounded } from '../Button';
import { tasksContext } from '@/hooks/TasksContext';
import Link from 'next/link';
import { languageContext } from '@/hooks/LanguageContext';

export const Menu = () => {
  
  const {theme, setTheme} = useTheme();
  const {resetTasks} = useContext(tasksContext);
  const {updateLanguage} = useContext(languageContext);

  const toogleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className='flex w-full flex-row justify-between items-center px-8 py-6 bg-slate-50/50 dark:bg-slate-950/50 border-b border-slate-300 dark:border-slate-800 backdrop-blur-sm fixed top-0 left-0'>

      <div className='flex flex-row'>
        <h1 className='mr-2 text-base sm:text-xl font-bold text-black dark:text-white'>Hiperfocus App</h1>
        <Link className='flex' href='https://www.buymeacoffee.com/mhdev'>
          <Tag bgColor='yellow-400'>By MHDEV</Tag>
        </Link>
      </div>

      <div className='flex gap-2'>
          <ButtonRounded onClick={updateLanguage} variant='outline'><LanguageIcon className="w-4 h-4"/></ButtonRounded>
          <ButtonRounded onClick={resetTasks} variant='outline'><ArrowPathIcon className="w-4 h-4"/></ButtonRounded>
          <ButtonRounded onClick={toogleTheme} variant='outline'>{
            theme === 'light' ? (
              <MoonIcon className="w-4 h-4"/>
            ): (
              <SunIcon className="w-4 h-4"/>
            )
          }</ButtonRounded>
      </div>
    </header>
  )
}
