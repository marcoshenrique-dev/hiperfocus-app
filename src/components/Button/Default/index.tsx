import {ButtonHTMLAttributes} from 'react';

type ButtonVariants = 'primary' | 'red'

interface ButtonRoundedProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: ButtonVariants;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
}

export const ButtonDefault = ({children, variant, leftIcon, rightIcon, ...atributes}: ButtonRoundedProps) => {
  return (
    <>
      {
        variant === 'primary' && (
          <button className="px-6 py-3 flex items-center rounded-lg disabled:opacity-50 bg-yellow-400 text-black dark:bg-yellow-500 dark:text-black text-sm hover:opacity-75 font-bold " {...atributes}>
          {leftIcon && (
            <span className="mr-2">
              {leftIcon}
            </span>
          )}
          {children}
          {rightIcon && (
            <span className="ml-2">
              {rightIcon}
            </span>
          )}
        </button>
        
        )
      }
        
      { 
        variant === 'red' && (
          <button className='px-6 py-3 flex items-center rounded-lg disabled:opacity-50 bg-red-400 text-black dark:bg-red-400 dark:text-black text-sm hover:opacity-75 font-bold' {...atributes}>
             {leftIcon && (
            <span className="mr-2">
              {leftIcon}
            </span>
          )}
          {children}
          {rightIcon && (
            <span className="ml-2">
              {rightIcon}
            </span>
          )}
          </button>
        )
      }
    </>
  );
}

