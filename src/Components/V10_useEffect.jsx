import React from 'react'
import { useEffect } from 'react'
const V10_useEffect = () => {
    useEffect(()=>{
        console.log("useEffect is runing..")
    }, [])
  return (
    <div>
      <h1>Learning useEffect </h1>
    </div>
  )
}
export default V10_useEffect
