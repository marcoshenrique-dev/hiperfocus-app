import {ButtonHTMLAttributes} from 'react';

type ButtonVariants = 'primary' | 'red' | 'outline' 

interface ButtonRoundedProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: ButtonVariants,
}

export const ButtonRounded = ({children, variant, ...atributes}: ButtonRoundedProps) => {
  return (
    <>
      {
        variant === 'primary' && (
          <button className='rounded-full disabled:opacity-50 bg-yellow-400 text-black dark:bg-yellow-500 dark:text-black p-1.5 hover:opacity-75' {...atributes}>
            {children}
          </button>
        )
      }
        
      { 
        variant === 'red' && (
          <button className='rounded-full disabled:opacity-50 bg-red-300 text-black dark:bg-red-300 dark:text-black p-1.5 hover:opacity-75' {...atributes}>
            {children}
          </button>
        )
      }

{ 
        variant === 'outline' && (
          <button className='rounded-full disabled:opacity-50 border border-slate-300 text-slate-700 dark:border-slate-700 dark:text-slate-600 p-1.5 hover:opacity-75' {...atributes}>
            {children}
          </button>
        )
      }
    </>
  );
}