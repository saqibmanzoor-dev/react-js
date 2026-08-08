import React, { useContext, useState } from "react";

const BulbContext = React.createContext()

function BlubProvider({children}){

    const[blubOn , setBlubOn] = useState(true);

  return  <BulbContext.Provider
    value={{
      blubOn: blubOn,
      setBlubOn: setBlubOn,
    }}
  >
    {children}
  </BulbContext.Provider>

}

function App() {
  return (
    <div>
      <BlubProvider>
        <LightBulb />
      </BlubProvider>
    </div>
  );
}

  function LightBulb(){
     
     
    return <div>
      <BlubState/>
      <LightSwitch /> 
    </div>
  }


  function BlubState(){
     const {blubOn} = useContext(BulbContext)
    
    
    return <div>

          {blubOn? "BLUB IS ON" : "BLUB IS OFF"}
    </div>
  }

  function LightSwitch(){
  
  const {setBlubOn} = useContext(BulbContext)

    function toggle(){
      setBlubOn(prev => prev = !prev)
    }


    return  <div>
      <button onClick={toggle}> Toggle Bulb  </button>
  
    </div>
     }


export default App
