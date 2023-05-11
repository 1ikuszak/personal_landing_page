'use client';
import '@/styles/globals.css';

import { useSelectedLayoutSegment } from 'next/navigation';
import { useState } from 'react';
import { Link } from 'react-scroll';

import Container from '@/components/container';
import { Icons } from '@/components/icons';
import { MobileNav } from '@/components/mobile-nav';
import { cn } from '@/lib/utils';
import { MainNavItem } from '@/types';

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
          className="flex items-center justify-start w-full space-x-2 cursor-pointer md:w-auto"
          spy={true}
          smooth={true}
          duration={500}
        >
          <Icons.logo size={32} />
          <p className="text-3xl font-bold lg:text-2xl text-neutral-900">
            <span>Cvr</span>
            <span className="text-blue-500">Fly</span>
          </p>
        </Link>
        <button
          className="flex items-center space-x-2 l-0 md:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? (
            <Icons.close size={28} />
          ) : (
            <Icons.menu size={28} />
          )}
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
