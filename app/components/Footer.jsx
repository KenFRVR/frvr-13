import React from 'react'
import Image from 'next/image'

export default function Footer () {
  return (
        <div className='sticky bottom-0 flex items-center justify-around py-3 z-10 max-w-2xl left-0 right-0 m-auto bg-[#343434]'>
            <section className='flex flex-col gap-1 items-center text-pink-300'>
                <Image alt='photos' width={20} height={20} src='icons/photo-heart.svg' />
                <span>Photos</span>
            </section>
            <section className='flex flex-col gap-1 items-center'>
                <Image alt='albums' width={20} height={20} src='icons/wallpaper.svg' />
                <span>Albums</span>
            </section>
        </div>
  )
}
