'use client'

import { navLinks } from '@/constants'
import { images } from '@/constants/images'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Menu = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div onClick={() => setIsOpen(!isOpen)} className="md:hidden relative">
      <Image src={images.menu} width={28} height={28} alt="menu" className="cursor-pointer" />
      {isOpen && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center space-y-8 text-xl z-10">
          {navLinks.map(link => (
            <Link key={link.id} href={link.url}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Menu
