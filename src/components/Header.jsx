'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const navbarContent = [
  {
    id: 'banner',
    name: 'Banner',
  },
  {
    id: 'listPost',
    name: 'Post List',
  },
];

export default function Header() {
  const [show, setShow] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);
  const [isTop, setIsTop] = useState(true);

  const [activeState, setActiveState] = useState();

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setShow(scrollPos > currentScrollPos || currentScrollPos < 10);
    setScrollPos(currentScrollPos);

    setIsTop(currentScrollPos === 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPos]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-10 transition-transform duration-300 ease-in-out ${
        show ? 'translate-y-0 transform' : '-translate-y-full transform'
      } ${isTop ? 'bg-opacity-100' : 'bg-opacity-50'} bg-orange-500`}
    >
      <div className='container mx-auto flex h-16 justify-between'>
        <a
          rel='noopener noreferrer'
          href='#'
          aria-label='Back to homepage'
          className='flex items-center p-2 text-2xl font-bold'
        >
          LOGO
        </a>
        <ul className='hidden items-stretch space-x-3 md:flex'>
          {navbarContent.map((content) => {
            return (
              <li className='flex items-center justify-center'>
                <a
                  href={`#${content.id}`}
                  onClick={() => setActiveState(content.id)}
                >
                  <Button
                    variant={'link'}
                    className={`text-lg ${activeState == content.id ? 'text-primary underline underline-offset-4' : null}`}
                  >
                    {content.name}
                  </Button>
                </a>
              </li>
            );
          })}
        </ul>
        <button className='flex justify-end p-4 md:hidden'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
