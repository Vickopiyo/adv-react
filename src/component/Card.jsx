import React from 'react'   

import PropTypes from 'prop-types';  
const Card = (props) => {  

const style = {
    backgroundColor : props.cardColor ,
    height : 200,
    width : 200
}
 
  return (
    <div
       style={style}
    >Card</div>
  ) 
}      


Card.propTypes = {  
    cardColor : PropTypes.string.isRequired   
}  
        
Card.defaultProps = {  
    cardColor: "blue"
}

export default Card