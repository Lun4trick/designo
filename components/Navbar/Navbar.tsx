'use client'

import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import { navigationLinks } from '@/utils/navigationLinks';

function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  return (
    <header>
      <nav>
        <div className='flex py-[35px] px-[25px] sm:px-[40px] sm:py-[64px]  items-center justify-between'>
          <Link href="/">
            <Image
              className='p-2'
              src="/img/logo.svg"
              alt="logo"
              width={200}
              height={30}
            />
          </Link>
          <ul className='hidden sm:flex justify-between items-center gap-[42px]'>
            {navigationLinks.map((link) => (
              <li
                key={link.href}
                className=' text-dark-gray text-[14px] tracking-[2px] uppercase'>
                <Link href={link.href}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <button 
            className={cn(
            'text-black sm:hidden w-[24px] h-[20px] bg-no-repeat bg-center transition-all',
            { 'bg-ham-open': !isMobileOpen, 'bg-ham-close': isMobileOpen }
            )}
            onClick={() => setIsMobileOpen(prev => !prev)} 
          />
        </div>
        <MobileMenu isMenuOpen={isMobileOpen} />
      </nav>
    </header>
  )
}

export default Navbar