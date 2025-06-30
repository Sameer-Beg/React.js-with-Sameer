import React from 'react'

const V4_TerrnoryOperater = ({name , age }) => {
  return (
    <div>
        <h1>
            {age>18 ? <h1>Yes u can drive</h1> : <h2>No u can't drive</h2>}
        </h1>
    </div>
  )
}


export default V4_TerrnoryOperater
