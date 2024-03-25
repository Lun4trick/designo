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
      'bg-black bg-opacity-75 h-screen z-40 transition-all duration-500',
      { 'bg-opacity-0': !isMenuOpen, 'bg-opacity-75': isMenuOpen}
    )}>
      <ul className={cn(
        'w-full bg-black relative z-50 flex flex-col justify-between items-center overflow-hidden transition-all duration-500 px-[25px] py-[50px]',
        { 'h-[0px] py-0': !isMenuOpen, 'h-[235px]': isMenuOpen}
      )}>
        {navigationLinks.map((link) => (
          <li
            className={cn(
              'text-white uppercase text-left w-full text-[24px] tracking-[2px] overflow-hidden'
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