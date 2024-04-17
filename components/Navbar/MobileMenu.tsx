import { navigationLinks } from '@/utils/navigationLinks'
import cn from 'classnames'
import Link from 'next/link'

interface Props {
  isMenuOpen: boolean;
}

function MobileMenu({ isMenuOpen }: Props) {
  return (
    <div 
      className={cn(
      'bg-black z-40 h-screen w-full absolute transition-all duration-500 sm:hidden',
      { 'bg-opacity-0': !isMenuOpen, 'bg-opacity-75': isMenuOpen}
    )}>
      <ul className={cn(
        'w-full bg-black relative z-50 flex flex-col justify-between items-center overflow-hidden transition-all duration-500',
        { 'h-[0px] py-0': !isMenuOpen, 'h-[235px] px-[25px] py-[50px]': isMenuOpen}
      )}>
        {navigationLinks.map((link) => (
          <li
            className={cn(
              'text-white uppercase text-left w-full text-[24px] tracking-[2px] overflow-hidden active:border-b-2 active:border-white active:scale-105 transition-all duration-300',
            )}
            key={link.href}
          >
            <Link href={link.href}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
      
  )
}

export default MobileMenu