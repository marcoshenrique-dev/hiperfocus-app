'use client'

import { languageContext } from "@/hooks/LanguageContext";
import homeTranslation from "@/translations/home";
import { useTheme } from "next-themes";
import Image from "next/image";

import { useContext } from "react";

export const EmptyRunning = () => {

  const {theme} = useTheme();
  const {language} = useContext(languageContext);

  return (
    <div className="flex flex-col w-full items-center justify-center mt-20">
      <Image priority width={20} height={20} className="w-80 h-80" src={theme === 'light' ? '/empty-running-light.svg': '/empty-running-dark.svg'} alt="No tasks registred"/>
      <h1 className="text-2xl font-bold mt-4 mb-1">{homeTranslation[language].empty.running.title}</h1>
      <h3 className="text-sm font-medium">{homeTranslation[language].empty.running.description}</h3>
    </div>
  );
}

