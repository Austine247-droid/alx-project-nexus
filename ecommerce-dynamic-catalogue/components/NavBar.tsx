import Link from 'next/link'
import React from 'react'

import { GrTechnology } from 'react-icons/gr'
import Menu from './Menu'
import { navLinks } from '@/constants'
import SearchBar from './SearchBar'
import NavBarIcons from './NavBarIcons'
const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* MOBILE */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide">TinkerBit</div>
        </Link>
        <Menu />
      </div>
      {/* BIGGER SCREENS */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          {/* Logo and navigation links */}
          <Link href="/" className=" flex items-center space-x-2">
            <div className="rounded-full bg-gray-950 flex items-center justify-center w-10 h-10">
              <GrTechnology size={28} color="#ffffff" className="absolute" />
            </div>
            <h1 className="text-xl tracking-wide sm:block md:hidden text-black font-bold">
              TinyCommerce
            </h1>
          </Link>
          <div className="hidden xl:flex gap-4">
            {navLinks.map(link => (
              <Link key={link.id} href={link.url} className="hover:text-blue-700">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavBarIcons />
        </div>
      </div>
    </div>
  )
}

export default Navbar
