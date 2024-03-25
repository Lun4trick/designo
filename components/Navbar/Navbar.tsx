'use client'

import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'
import { useState } from 'react';
import MobileMenu from './MobileMenu';

function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  return (
    <header>
      <nav>
        <div className='flex py-[35px] px-[25px] items-center justify-between'>
          <Link href="/">
            <Image
              src="/img/logo.svg"
              alt="logo"
              width={200}
              height={30}
            />
          </Link>
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