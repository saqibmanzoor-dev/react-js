import { useEffect } from "react"

// useDebounce waits for a short time before running a function.
// If the function is called again before the wait ends, the old wait is cancelled.
// This is useful for actions such as search, where we only want the final input.
   export function useDebounce(originalFn){

    const currentClock = useRef()


    

    const fn = ()=>{
      clearTimeout(currentClock.current)

        currentClock.current = setTimeout(originalFn,50)
    }

    return fn
   }
