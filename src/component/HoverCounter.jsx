import React    from 'react'
import WithCounter from './WithCounter'               

const HoverCounter = ({handleAdd,count}) => {       

  return (
    <div>
     <h1  onMouseOver={handleAdd}>I have been hovered {count} times!</h1>
    </div>
  )
}

export default WithCounter(HoverCounter)            