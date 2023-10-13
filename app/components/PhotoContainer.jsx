import React from 'react'
import PhotoCard from './PhotoCard'

export default function PhotoContainer ({ photos }) {
  return (
        <section className="grid grid-cols-4 relative">
            {
                photos.map(photo => (
                   <PhotoCard photo={photo} key={photo.id} />
                ))
            }
        </section>
  )
}
