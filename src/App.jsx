import Child  from "./component/Child"

function App() {     

  // Always Render Components with FRAGMENT TO AVOID  Convoluting your App 
  return (  
    <div className="App">    
      <h1>I am the Parent Component</h1>      
              
      <Child />          
    </div>     
  )
}

export default App
