'use client';
import '@/styles/globals.css';

import { useSelectedLayoutSegment } from 'next/navigation';
import { useState } from 'react';
import { Link } from 'react-scroll';

import { Icons } from '@/components/Icons';
import { MobileNav } from '@/components/mobile-nav';
import { cn } from '@/lib/utils';
import { MainNavItem } from '@/types';

import Container from './Container';

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

const Navbar = ({ items, children }: MainNavProps) => {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <Container>
      <div className="flex py-2 md:justify-between">
        <Link
          to="hero"
          className="flex items-center justify-center w-full space-x-2 cursor-pointer md:w-auto md:justify-start"
          spy={true}
          smooth={true}
          duration={500}
        >
          <Icons.logo />
          <p className="text-2xl font-bold text-neutral-900">
            <span>Firefly</span>
            <span className="text-blue-500">Design</span>
          </p>
        </Link>
        <button
          className="flex items-center space-x-2 l-0 md:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? <Icons.close /> : <Icons.menu />}
        </button>
        {showMobileMenu && items && (
          <MobileNav
            items={items}
            closeMobileMenu={() => setShowMobileMenu(false)}
          >
            {children}
          </MobileNav>
        )}
        {items?.length ? (
          <nav className="hidden gap-6 md:flex">
            {items?.map((item, index) => (
              <Link
                key={index}
                to={item.disabled ? '#' : item.href}
                className={cn(
                  'flex items-center text-lg font-semibold text-slate-600 sm:text-base hover:text-slate-700 cursor-pointer',
                  item.href.startsWith(`/${segment}`) && 'text-slate-900',
                  item.disabled && 'opacity-60'
                )}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>
    </Container>
  );
};

export default Navbar;
