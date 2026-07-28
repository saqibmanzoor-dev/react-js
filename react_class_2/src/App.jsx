import { useState, useEffect, use } from 'react'


function App() {

  
      
       return (
       <div>
          <b>hii there</b>

          <Counter></Counter>

        </div>)
}
      /// monting rerendering , unmouting
        function Counter(){

          const [Count , setCount] = useState(0)
         
          
           // hooking into the lifecycle events of react
          console.log("inside the counter");

            // we wanted to guaard our interval
      
          
          

          // function increaseCount(){
          //   // setCount(Count + 1)
          //   alert("hii")
          // }
          
        
          return <div>
            <h1 id='count'>{Count}</h1>
            {/* <button onClick={increaseCount}>
              increase count
            </button> */}
            
          </div>
        }

       
    


export default App
