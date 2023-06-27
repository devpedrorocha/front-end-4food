'use client'
import { useState } from 'react';
import CSS from "csstype";
import { BsPersonCircle } from 'react-icons/bs'
import { IoMdArrowDropdown } from 'react-icons/io'

interface link {
    label: string,
    url: string
}

interface dropDownProps {
    buttonLabel: string,
    links: link[],
    size: number
}

export function Dropdown ({ buttonLabel, links, size }:dropDownProps ) {

  const style: CSS.Properties = {
    fontSize: `${size}px`,
  };

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div className="relative">
      <button
        type="button"
        className="inline-flex items-center justify-center font-medium text-black 
        hover:opacity-80 duration-300 uppercase"
        style={style}
        onClick={toggleDropdown}>
        <BsPersonCircle color='black'/>
        <IoMdArrowDropdown color='black' className='text-xl'/>
      </button>
      {isOpen && (
        <div className="absolute right-3 w-40 origin-top-right">
          <ul className='text-center'>
            {links.map((link) => (
              <li key={link.label} className="text-base bg-white px-14 py-4 w-48 hover:bg-gray-100 uppercase border border-black border-solid">
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};