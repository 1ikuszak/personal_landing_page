'use client';

import { cn } from '@/lib/utils';
import { MainNavItem } from '@/types';
import { useSelectedLayoutSegment } from 'next/navigation';
import * as React from 'react';
import { Link } from 'react-scroll';
import { Icons } from './icons';

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

const Footer = ({ items }: MainNavProps) => {
  const segment = useSelectedLayoutSegment();
  return (
    <footer className="flex flex-col gap-12 p-12 text-light">
      <div className="flex items-center justify-center lg:justify-between">
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={0}
          duration={400}
          className="flex items-center justify-center gap-2 cursor-pointer"
        >
          <Icons.logo />
          <p className="text-2xl">CvrFly</p>
        </Link>
        <div className="hidden gap-2 lg:flex">
          {items?.length ? (
            <nav className="hidden gap-6 md:flex">
              {items?.map((item, index) => (
                <Link
                  key={index}
                  to={item.disabled ? '#' : item.href}
                  className={cn(
                    'flex items-center text-lg font-semibold sm:text-base cursor-pointer',
                    item.href.startsWith(`/${segment}`) && 'text-slate-900',
                    item.disabled && 'opacity-60'
                  )}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          ) : null}
        </div>
      </div>
      <hr className="rounded-full opacity-30 " />
      <div className="flex justify-center gap-3">
        <a href="/politykaprywatnosci">Polityka Prywatności</a>
        <p className="text-center">©Copyright CvrFly</p>
      </div>
    </footer>
  );
};

export default Footer;
