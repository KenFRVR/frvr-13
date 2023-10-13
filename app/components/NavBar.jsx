import React from 'react'
import Image from 'next/image'

export default function NavBar () {
  return (
    <header className='flex z-10 p-4 justify-between items-center sticky top-0 left-0 right-0 m-auto max-w-2xl  bg-[#121212]'>
      <h1 className='text-lg'>
        FRVR
      </h1>
      <nav>
        <ul className='flex gap-4'>
          <li>
            <Image alt='Search icon' width={20} height={20} src='icons/search.svg' />
          </li>
          <li>
            <Image alt='dots vertical icon' width={20} height={20} src='icons/dots-vertical.svg' />
          </li>
        </ul>
      </nav>
    </header>
  )
}
