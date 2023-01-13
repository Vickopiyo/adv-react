import React, {useState} from "react";

const WithCounter = (OriginalComponent) => {   

  const NewComponent = () => {        
    const [count, setCount] = useState(0)        
    function handleAdd(){ 
        setCount(count => count + 1 )
    }         

    function handleSubtract(){
      setCount(count => count - 1 )
     }  
      
    return <OriginalComponent  handleAdd={handleAdd}  handleSubtract= {handleSubtract}  count={count} /> 
  };   


  return  NewComponent;
};

export default WithCounter;
