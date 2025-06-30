// write a program were we want to product name and title and brand and price using props 
import React from 'react'

const V3_problem1 = (Props) => {
  return (
    <div>
      <h1>Title = {Props.title}</h1>
      <h1>brand = {Props.brand}</h1>
      <h1>Price = {Props.price}</h1>
    </div>
  )
}

export default V3_problem1
