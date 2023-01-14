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
     
    //  New component returns component passed in as argument with extra functionalities through props 
    return <OriginalComponent  handleAdd={handleAdd}  handleSubtract= {handleSubtract}  count={count} /> 
  };   

  return  NewComponent;
};

export default WithCounter;       



