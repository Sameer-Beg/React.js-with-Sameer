import React from 'react'

const V9_Filter = () => {
  // Array of products with their properties
    let products = [
        {id:1 , title:"Apple", catogery:"mobiles" ,  price:20000},
        {id:2 , title:"washingmachine", catogery:"machines" ,  price:120000},
        {id:3 , title:"Tv", catogery:"Tv" ,  price:5000000}
    ]
    // Filter products by category "machines"
    const filtereddata = products.filter((data)=>data.catogery == "Tv")

    // Log filtered data to the console
    console.log(filtereddata)
  return (
    <div>
      {filtereddata.map((data)=><div key={data.id}>

        <h1>title = {data.title}</h1>
        <p> price = {data.price}</p>
      </div>)}
    </div>
  )
}

export default V9_Filter
