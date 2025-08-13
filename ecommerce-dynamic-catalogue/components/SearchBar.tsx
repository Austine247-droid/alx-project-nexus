'use client'

import { images } from '@/constants/images'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'

const SearchBar = () => {
  const router = useRouter()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') as string

    if (name) {
      router.push(`/list?name=${name}`)
    }
  }
  return (
    <form
      className="flex items-center justify-between bg-gray-200 p-2 rounded-md flex-1 w-full"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        placeholder="Search"
        className="flex-1 bg-transparent outline-none"
      ></input>
      <button className="cursor-pointer">
        <Image alt="search" src={images.search} width={16} height={16} />
      </button>
    </form>
  )
}

export default SearchBar
