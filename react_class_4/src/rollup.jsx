import { useState } from "react"

function App() {
  return <div>

    <LightBulb/>
  </div>
}

  function LightBulb(){
     
    const[blubOn , setBlubOn] = useState(true);
    return <div>
      <BlubState blubOn ={blubOn}/>
      <ToggleBulbState setBlubOn= {setBlubOn}/>
    </div>
  }


  function BlubState({blubOn}){

    
    
    return <div>

          {blubOn? "BLUB IS ON" : "BLUB IS OFF"}
    </div>
  }

  function ToggleBulbState({setBlubOn}){


    function toggle(){
      setBlubOn(prev => prev = !prev)
    }


    return  <div>
      <button onClick={toggle}> Toggle Bulb  </button>
  
    </div>
     }


