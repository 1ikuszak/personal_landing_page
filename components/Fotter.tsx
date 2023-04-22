'use client';

import { cn } from '@/lib/utils';
import { MainNavItem } from '@/types';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import * as React from 'react';
import { Icons } from './Icons';

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

const Footer = ({ items }: MainNavProps) => {
  const segment = useSelectedLayoutSegment();
  return (
    <footer className="flex flex-col gap-12 p-12 text-white">
      <div className="flex justify-between">
        <div className="flex items-center justify-center gap-2">
          <Icons.logo />
          <p className="text-2xl">FireflyDesign</p>
        </div>
        <div className="flex gap-2">
          {items?.length ? (
            <nav className="hidden gap-6 md:flex">
              {items?.map((item, index) => (
                <Link
                  key={index}
                  href={item.disabled ? '#' : item.href}
                  className={cn(
                    'flex items-center text-lg font-semibold sm:text-base',
                    item.href.startsWith(`/${segment}`) && 'text-slate-900',
                    item.disabled && 'opacity-60'
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          ) : null}
        </div>
      </div>
      <hr className="rounded-full opacity-30 " />
      <p className="text-center">©Copyright FireflyDesign</p>
    </footer>
  );
};

export default Footer;
