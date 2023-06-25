'use client'

import { languageContext } from "@/hooks/LanguageContext";
import baseTranslation from "@/translations/base";
import Link from "next/link";
import { useContext } from "react";

export default function App() {

  const {language} = useContext(languageContext);

  return (
    <main className="flex flex-1 flex-col items-center w-full pt-40 bg-slate-50 dark:bg-slate-950">
        <h1 className="text-2xl">{baseTranslation[language].welcome} <span className="font-bold text-yellow-500">Hiperfocus app</span></h1>
        <p className="text-center mt-2 sm:w-8/12 p-2">{language === 'br' ? 'Eu sou': 'I am'} <a className="text-yellow-600" href="https://www.linkedin.com/in/marcos-henrique-developer/">Marcos Henrique</a>, {baseTranslation[language].description}</p>

        <Link href='/home' className="mt-6 bg-yellow-500 px-8 py-3 rounded-md font-bold text-black">
        {baseTranslation[language].button}
        </Link>

        <section className="fixed bottom-0 pb-4 pt-4 left-0 flex flex-row justify-evenly items-center w-full bg-slate-100/80 dark:bg-slate-900/50 backdrop-blur-sm">
          <Link className='hidden sm:flex' href='https://www.linkedin.com/in/marcos-henrique-developer/'>
          <p className="font-bold">🔗 Linkedin</p>
          </Link>
          <Link className='flex' href='https://www.linkedin.com/in/marcos-henrique-developer/'>
          <p className="font-bold">📋 Instagram</p>
          </Link>
          <Link className='hidden sm:flex' href='https://www.linkedin.com/in/marcos-henrique-developer/'>
          <p className="font-bold">🎥 Youtube</p>
          </Link>
          <Link className='flex' href='https://www.linkedin.com/in/marcos-henrique-developer/'>
          <p className="font-bold">👨‍💻 Github</p>
          </Link>
      </section>
    </main>
  )
}