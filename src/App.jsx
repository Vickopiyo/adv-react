import Child  from "./component/Child" 
import Card from "./component/Card"  

function App() {     

  // Always Render Components with FRAGMENT TO AVOID  Convoluting your App 
  return (     

    <div className="App">    
      <h1>I am the Parent Component</h1>                 
      <Child />  
        {/*1st Card instance output white bg but warning in console of the type of prop supplied to it   */}
      <Card   cardColor= {45}   />        
      <Card   />     
      <Card   cardColor= "yellow"/>        
    </div>     
  )
}    


export default App
