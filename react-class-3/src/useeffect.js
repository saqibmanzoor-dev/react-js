import { useState, useEffect } from "react";


function App(){

  const [showTimer , setShowTimer] = useState(true)

  useEffect(()=>{
    setInterval(()=>{
      setShowTimer(prev => prev = !prev)
    }, 5000)
  },[])


  return <div>
    {showTimer && <Timer/>}
  </div>

}

const Timer = ()=>{
  const [seconds , setSeconds] = useState(0)


  useEffect(()=>{
    console.log("from inside the clock");
    
      const intervalId = setInterval(() => setSeconds(sec => sec + 1), 1000) 

      // timer keeps running
      return function(){ 
        // unsubscribing the events or clearing intervals 
          clearInterval(intervalId)
      }
  },[])

  return <div> {seconds} seconds elapsed</div>
}


