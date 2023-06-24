import { HTMLAttributes } from "react";

interface IPropsTag extends HTMLAttributes<HTMLHeadingElement>{
  bgColor: string;
  textColor?: string;
  children: React.ReactNode;
}

export const Tag = ({children, bgColor, textColor = 'white', ...atributes}: IPropsTag) => {
  return (
    <div {...atributes} className={`bg-${bgColor} hidden text-${textColor} sm:flex items-center w-auto px-3 text-xs rounded-full font-semibold`} >
      {children}
    </div>
  );
}