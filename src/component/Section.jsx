import React from "react"
import { LevelContest } from "./LevelContext" 
import { useContext } from "react"    

const Section = ({ children }) => {            
             
    const level =useContext(LevelContest)          
	return (
		<section className="section">
			<LevelContest.Provider value={level}>      
                {children}
            </LevelContest.Provider>                               
		</section>
	)      
}           
                
export default Section             
    