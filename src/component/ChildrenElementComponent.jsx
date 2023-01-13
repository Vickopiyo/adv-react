import React from 'react'

const ChildrenElementComponent = (props) => {
  return (
    <div   className='component-children' >        
     {props.children}     
    </div>
  )
}

export default ChildrenElementComponent