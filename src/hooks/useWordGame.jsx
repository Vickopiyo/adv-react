import { useState,useRef,useEffect} from "react"       

function  useWordGame(startingTime= 10){       
    
                const inputRef = useRef(null)
				//    useState always return arrays because it allows us to give variable name we likei.e count,hesabu.Arrays wokrs with index.However object work wiht named properties thus the name has to exact one with keys/properties
				const [text, setText] = useState("")
				const [timeRemaining, setTimeRemaining] = useState(startingTime)
				const [isTimeRunning, setIsTimeRunning] = useState(false)
				const [wordCount, setWordCount] = useState(0)

				function handleChange(e) {           
					const { value } = e.target
					setText(value)
				}

				function calculateWordCount(text) {
					const wordCount = text
						.trim()
						.split(" ")
						.filter((word) => word !== "").length
					return wordCount
				}

				function startClock() {
					setIsTimeRunning(true)
					setTimeRemaining(startingTime)
					setText("")
					setWordCount(0)
					inputRef.current.disabled = false
					inputRef.current.focus()
				}

				function endGame() {
					// time === 0 means game is ended
					setIsTimeRunning(true)
					const numWords = calculateWordCount(text)
					setWordCount(numWords)
				}
				// console.log(text)
				useEffect(() => {
					if (isTimeRunning && timeRemaining > 0) {
						setTimeout(() => {
							setTimeRemaining((time) => time - 1)
						}, 1000)
					} else if (timeRemaining === 0) {
						endGame()
					}
				}, [timeRemaining, isTimeRunning])                    


            return   {inputRef, handleChange, text, startClock,timeRemaining,isTimeRunning, wordCount }       
        
}              

export default useWordGame  