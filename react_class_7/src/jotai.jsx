import { useState } from "react"
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil"
import {counterAtom} from './store/atoms/counter'
import { useAtom, useAtomValue, useSetAtom } from "jotai"


function App() {
  

  return (<>
      
      <Counter/>
      
      </>
  
  )
}

function Counter(){
   
  return <div>
    <CurrentCount  />
    <Increase />
    <Decrease />
  </div>
}


function CurrentCount(){
  const count = useAtomValue(counterAtom)
 return <div>
    {count}
  </div>
}
  function Increase(){
    const setCount = useSetAtom(counterAtom)
    function increase(){
      setCount(c => c + 1)
    }
   return <div>
        <button onClick={increase}>increase</button>
    </div>
  }
   function Decrease(){
    const setCount = useSetAtom(counterAtom)
    function decrease(){
      setCount(c => c - 1)
    }
   return <div>
        <button  onClick={decrease}>decrease</button>
    </div>
  }


