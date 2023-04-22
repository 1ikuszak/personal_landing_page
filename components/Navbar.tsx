'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import * as React from 'react';

import { Icons } from '@/components/Icons';
import { MobileNav } from '@/components/mobile-nav';
import { cn } from '@/lib/utils';
import { MainNavItem } from '@/types';

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

const Navbar = ({ items, children }: MainNavProps) => {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  return (
    <div className="flex md:justify-between">
      <button
        className="flex items-center space-x-2 l-0 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.menu />}
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
      <Link
        href="/"
        className="flex items-center justify-center w-full space-x-2 md:w-auto md:justify-start"
      >
        <Icons.logo size={36} />
        <p className="text-xl font-bold text-neutral-900">
          <span>Firefly</span>
          <span className="text-blue-500">Design</span>
        </p>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? '#' : item.href}
              className={cn(
                'flex items-center text-lg font-semibold text-slate-600 sm:text-base hover:text-slate-700',
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
  );
};

export default Navbar;
