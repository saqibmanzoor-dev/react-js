// react returns first and effect gets called

import { useEffect } from "react"
// useprev is used to track the previous value of the variable
// The ref survives re-renders, so it can return the value from the prior render.
export function usePrev(value){

    const ref = useref()

    useEffect((()=>{
        ref.current = value// 0
    }),[value])

    return ref.current // undefined
}
