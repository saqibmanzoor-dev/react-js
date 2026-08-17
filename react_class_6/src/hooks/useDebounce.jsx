import { useEffect, useState } from "react"

// useDebounce waits for a short time before running a function.
// If the function is called again before the wait ends, the old wait is cancelled.
// This is useful for actions such as search, where we only want the final input.
   export function useDebouncehook(originalFn){

    const currentClock = useRef()


    

    const fn = ()=>{
      clearTimeout(currentClock.current)

        currentClock.current = setTimeout(originalFn,50)
    }

    return fn
   }



   // second implementation

   // This version gives back a delayed value instead of a delayed function.
   // It updates only after the user stops typing or changing the value.
   import { useEffect, useState } from "react";
import useCounter from "./hooks/useCounter";
import usePostTitle, { useFetch } from "./hooks/useFetch";
function App() {

     function useDebounce(value , delay){
        const [debounceVal , setDebounceVal] = useState(value);

        useEffect((()=>{
         
            const handler = setTimeout(()=>{
                setDebounceVal(value)
            },(delay))

            // clean up

            return  () => clearTimeout(handler);



        }) ,[value , delay])
        return debounceVal
    }

  const [inputVal , setInputVal] = useState()

  const debounceVal = useDebounce(inputVal , 200)

  function change(e){
    setInputVal(e.target.value)

  
  }

  useEffect((
    ()=>{
        // expansive opern
    }
  ),[debounceVal])

  return <div>

    <input type="text" name="" id=""onChange={change} />

  </div>
}




 import { useEffect, useState } from "react";
import useCounter from "./hooks/useCounter";
import usePostTitle, { useFetch } from "./hooks/useFetch";
function App2() {

  function sendDataToBackend(){
    fetch("")
  }

  const debouncedFn = useDebounce(sendDataToBackend)


  return <div>

    <input type="text" name="" id=""onChange={debouncedFn} />

  </div>
}

export default App;
