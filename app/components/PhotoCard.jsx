'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Modal from './Modal'

export default function PhotoCard ({ photo }) {
  const [fullscreen, setFullscreen] = useState(false)

  const handleClick = () => {
    setFullscreen(prev => !prev)
  }

  return (
    fullscreen
      ? <>
        <Image alt={photo.alt} width={80} height={80} src={photo.src} className='w-full' onClick={handleClick} />
        <div onClick={handleClick} className='z-50 h-full w-[99.8%] top-0 absolute backdrop-blur-sm grid place-content-center appear'>
          <Modal photo={photo} />
        </div>
      </>
      : <Image alt={photo.alt} width={80} height={80} src={photo.src} className='w-full' onClick={handleClick} />
  )
}
