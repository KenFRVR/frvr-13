import React from 'react'
import MonthContainer from './MonthContainer'

export default function YearContainer ({ data }) {
  return (
      <>
         {
            data.map(year => (
             <MonthContainer key={year.year} months={year.months} year={year.year}/>
            ))
         }
      </>

  )
}
