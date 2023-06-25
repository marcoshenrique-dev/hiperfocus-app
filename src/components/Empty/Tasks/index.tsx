'use client'

import { languageContext } from "@/hooks/LanguageContext";
import homeTranslation from "@/translations/home";
import { useTheme } from "next-themes";
import Image from "next/image";

import { useContext } from "react";

export const EmptyTasks = () => {

  const {theme} = useTheme();
  const {language} = useContext(languageContext);

  return (
    <div className="flex flex-col w-full items-center justify-center mt-2">
    <Image width={20} height={20} className="w-80 h-80" src={theme === 'light' ? '/empty-light.svg': '/empty-dark.svg'} alt="No tasks registred"/>
    <h3 className="text-lg font-semibold">{homeTranslation[language].empty.tasks} {theme === 'light' ? '🌞': '🌚'}</h3>
    </div>
  );
}

