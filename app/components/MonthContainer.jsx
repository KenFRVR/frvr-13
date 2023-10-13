import React from 'react'
import PhotoContainer from './PhotoContainer'

export default function MonthContainer ({ months, year }) {
  return (
      <>
         {
            months.map(month => (
               <article key={month.id}>
                  <header className="py-3 px-4 flex justify-between items-center ">
                     <small className="text-gray-400">
                        {month.name} {year}
                     </small>
                     <small className="text-pink-300 cursor-pointer hidden">
                        Last Modification
                     </small>
                  </header>
                 <PhotoContainer photos={month.photos}/>
               </article>
            ))
         }

      </>
  )
}
