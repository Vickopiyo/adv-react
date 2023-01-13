import React from 'react'  
import Granchild from './Granchild'


const Child = () => {
  return (
    <>
        <h2>I am the Child component</h2>    
        <Granchild />
    </>
  )
}

export default Child