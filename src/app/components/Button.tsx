import React from "react";
import CSS from "csstype";

type Props = {
  children: string | JSX.Element;
  onClick: React.MouseEventHandler | undefined;
  style?: CSS.Properties | undefined;
};

export function Button({ children, onClick, style }: Props) {
  return (
    <button
      className="bg-black text-white px-14 py-4 hover:opacity-80 hover:-translate-y-1 
        duration-300 text-xl"
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
}
