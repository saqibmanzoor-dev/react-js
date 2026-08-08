import { useState } from "react"

function App() {
     const[blubOn , setBlubOn] = useState(true);
  return <div>

    <Light blubOn = {blubOn}  setBlubOn = {setBlubOn}/>
  </div>
}

  function Light({blubOn , setBlubOn}){
     
   
    return <div>
      <LightBlub blubOn ={blubOn}/>
      <LightSwitch setBlubOn= {setBlubOn}/>
    </div>
  }


  function LightBlub({blubOn}){

    
    
    return <div>

          {blubOn? "BLUB IS ON" : "BLUB IS OFF"}
    </div>
  }

  function LightSwitch({setBlubOn}){


    function toggle(){
      setBlubOn(prev => prev = !prev)
    }


    return  <div>
      <button onClick={toggle}> Toggle Bulb  </button>
  
    </div>
     }


