import React    from 'react'
import WithCounter from './WithCounter'               

const HoverCounter = (props) => {     
  
  // console.log(props)                                   
  return (             
    <div>               
     <h1  onMouseOver={props.handleAdd}>I have been hovered {props.count} times!</h1>       
    </div>             
  )
}                                                                   
        
// Here hover is nolonger returned but the outcome of withCounter when  hovercounter is passed into it 
export default WithCounter(HoverCounter)            