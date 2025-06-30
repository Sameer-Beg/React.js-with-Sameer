import React from 'react'

const V8_map = () => {
    let products =[
        {id:1, title:'iphone', brand:'Aplle', Price:120000},
        {id:2, title:'galaxy', brand:'samsung', Price:130000},
        {id:3, title:'lapi', brand:'Asus', Price:140000}
    ]
  return (
    <div>
      {
        products.map((data)=><div key={data.id}><h1>title = {data.title}</h1><h2>brand = {data.brand}</h2><h3>price = {data.Price}</h3></div>)
      }
    </div>
  )
}

export default V8_map

