// import ClickCounter from "./component/ClickCounter"
// import HoverCounter from "./component/HoverCounter"
// import Section from "./component/Section"
// import Heading from "./component/Heading"

import { useEffect, useState,useRef } from "react"     
import useWordGame from "./hooks/useWordGame"

function App() {           
      
	const {
		inputRef,
		handleChange,
		startClock,
		text,
		timeRemaining,   
		isTimeRunning,
		wordCount,
	} = useWordGame(5) 
             

	return (                      
		<div className="App">
			{/*use context example*/}

			{/* <Section>         
				<Heading>Title</Heading>
				<Section level={2}>
					<Heading>Heading 2</Heading>                  
					<Section level={3}>
						<Heading>Heading 3</Heading>
						<Section level={4}>
							<Heading>Heading 4 </Heading>
						</Section>
					</Section>
				</Section>
			</Section> */}

			<h1>Test your typing Speed </h1>
			<textarea onChange={handleChange}  value={text}        
			                       
			    ref={inputRef}        
			    disabled={!isTimeRunning}
			   
			/>          
			<h4>Time Remaining:{timeRemaining} </h4>
			<button onClick={startClock}
			disabled={isTimeRunning}   

			   
			>Start</button>     
			<h1>Word Count:{wordCount}</h1>                         

		</div>
	)       
}   
export default App
