import { useRef, useState } from "react"


function App(){

  const inputRef = useRef();
  // let value = 1  raw variable
  //  const [count , SetCount] = useState(0); // state variable
     //  const refValue = useRef()                            // ref variable

  function focusOnInput(){
      // document.getElementById("name").focus()  useref uses come here
      // refrefce to a value when changed the value the component doesnot rerenderes
      inputRef.current.focus()

      
  }


  return <div>

    sign up
        
        <input  ref = {inputRef}type="text" name="" id="name" />
         <input type="text"  name="" id="" />
          
          <button onClick={focusOnInput}>submit</button>
        
  </div>
}

import { useRef, useState } from "react"


function App(){
     
  const [currentCount , setCurrentCount] = useState(1)
  // const [timer , setTimer] = useState(0) extra re_  render
  
  let timer = useRef();
      

      function increaseCount(){
        let value = setInterval(()=>{
          setCurrentCount(prev=> prev + 1)
        },1000)

        timer.current= value;
      }


      function stopClock(){
        
        console.log(timer);
        
        clearInterval(timer.current)
      }
  return <div>

    {currentCount} 
    <br />
    <button onClick={increaseCount}>increase</button>
     <button onClick={stopClock}>decrease</button>
  </div>
 
}


