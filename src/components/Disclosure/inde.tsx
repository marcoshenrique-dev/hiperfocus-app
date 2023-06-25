'use client'

import { languageContext } from '@/hooks/LanguageContext'
import homeTranslation from '@/translations/home'
import { Disclosure } from '@headlessui/react'
import { RectangleStackIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'

type TasksDiscloureProps = {
  children: React.ReactNode
}

export function TasksDisclosure({children}: TasksDiscloureProps) {

  const {language} = useContext(languageContext);

  return (
    <Disclosure>
      <Disclosure.Button className="py-2 bg-slate-200 dark:bg-slate-900 w-full text-md font-semibold flex flex-row items-center justify-center">
        {homeTranslation[language].tasks.collapse}
        <RectangleStackIcon className='w-5 h-5 ml-2'/>
      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500">
       {children}
      </Disclosure.Panel>
    </Disclosure>
  )
}