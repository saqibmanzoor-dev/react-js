import { memo, useEffect, useState } from "react"
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil"
import {counterAtom} from './store/atoms/counter'
import { useAtom, useAtomValue, useSetAtom } from "jotai"

//  Without memo Every time the parent renders, childrens renders too
// If its props haven't changed, React can skip it.


function App() {
  

  return (<>
      
      <Counter/>
      
      </>
  
  )
}

function Counter(){
  //  const [count , setCount] = useState(0);
  //  useEffect(() =>{(setInterval(()=>{
  //   setCount(c => c + 1 ) 
  //  }), 30000)},[])

  return <div>
    <MemoizedCurrentCount  />
    <Increase />
    <Decrease />
  </div>
}


function CurrentCount(){
   
 return <div>
    1
  </div>
}
const MemoizedCurrentCount = memo(CurrentCount) // first way
const Increase = memo(function (){
 
    function increase(){
      // setCount(c => c + 1)
    }
   return <div>
        <button onClick={increase}>increase</button>
    </div>
  })
   const  Decrease = memo (function(){ /// 2ND WAY 
    
    function decrease(){
      // setCount(c => c - 1)
    }
   return <div>
        <button  onClick={decrease}>decrease</button>
    </div>
  }
)


export default App
