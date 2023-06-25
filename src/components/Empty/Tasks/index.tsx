'use client'

import { useTheme } from "next-themes";
import Image from "next/image";

export const EmptyTasks = () => {

  const {theme} = useTheme();

  return (
    <div className="flex flex-col w-full items-center justify-center mt-2">
    <Image width={20} height={20} className="w-80 h-80" src={theme === 'light' ? '/empty-light.svg': '/empty-dark.svg'} alt="No tasks registred"/>
    <h3 className="text-lg font-semibold">Add your first task of the {theme === 'light' ? 'day 🌞': ' night 🌚'}</h3>
    </div>
  );
}

