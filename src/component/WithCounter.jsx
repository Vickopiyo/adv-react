import React, { useState } from "react"

const WithCounter = (OriginalComp) => {   
         
	const NewComp = (props) => {   
		const [count, setCount] = useState(0)

		function handleAdd() {
			setCount((count) => count + 1)       
		}
		function handleSubtract() {          
			setCount((count) => count - 1)
		}       

		return <OriginalComp  count={count}  handleAdd={handleAdd}  handleSubtract={handleSubtract} />       

	}           
                                          
	return NewComp       
          
}               
                  
export default WithCounter
              