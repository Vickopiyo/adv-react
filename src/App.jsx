import Child  from "./component/Child" 
import Card from "./component/Card"  
import ChildrenElementComponent from "./component/ChildrenElementComponent"

function App() {     

  // Always Render Components with FRAGMENT TO AVOID  Convoluting your App 
  return (     
    <div className="App">    
      <h1>I am the Parent Component</h1>                 
      <Child />  
        {/*1st Card instance output white bg but warning in console of the type of prop supplied to it   */}
      <Card   cardColor= {45}   />  
             {/*2nd card render with blue color specified in the defaultProps in card component  */}
      <Card       />     
      <Card   cardColor= "yellow"/>           

       {/* Component can have elements too which can be accessed as props.children.*/}  

       <ChildrenElementComponent   >
          <h1>I am an element in a component </h1>   
       </ChildrenElementComponent>  
                  
       <ChildrenElementComponent>
          <h1>I am an element in a same component</h1>   
       </ChildrenElementComponent>

    </div>     
  )
}     
export default App       
    
 