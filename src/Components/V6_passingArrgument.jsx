import React from 'react'

const V6_passingArrgument = () => {
    const addition = (a)=>{
        alert(a + 10)
    }
  return (
    <div>
      <button onClick={()=>addition(200)}>click me </button>
    </div>
  )
}

export default V6_passingArrgument

