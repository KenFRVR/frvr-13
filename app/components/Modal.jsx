import React from 'react'
import Image from 'next/image'

export default function Modal ({ photo }) {
  return (
          <div className='w-[440px] h-[440px] grid place-content-center'>
            <Image alt={photo.alt} width={440} height={440} src={photo.src} className='rounded-md w-auto h-auto'/>
          </div>
  )
}
