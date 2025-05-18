import React from 'react'

const CurrentTime = () => {
    let time= new Date();
  return (
   <p>The current time is :  <h5>{time.toLocaleDateString()} -  
   
   {time.toLocaleTimeString()}</h5></p>
  )
}

export default CurrentTime
