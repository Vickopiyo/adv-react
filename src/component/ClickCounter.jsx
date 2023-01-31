import React   from 'react'
import WithCounter from './WithCounter'

const ClickCounter = ({handleAdd,handleSubtract, count}) => {  
          
  return (
    <div>
    <button  onClick={handleAdd}>Add</button>
    <h2>{count}</h2>
    <button  onClick={handleSubtract}>Subtract</button>     

    </div>
  )
}                

export default WithCounter(ClickCounter)    