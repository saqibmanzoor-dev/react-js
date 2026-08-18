import { useAtomValue, useSetAtom } from "jotai";
import { counterAtom, even } from "./store/atoms/counter";

export default function App() {
  return <div>


   <Buttons/>
   <Counter/>
   <IsEven/>
  </div>;
}


function Buttons(){
  
    const setCount = useSetAtom(counterAtom)
    function increase(){
        

        setCount(c=> c + 2)
    }

    function decrease(){
        

        setCount(c=> c - 1)
    }



    return <div>
        <button  onClick={increase}>Increase</button>
        <button onClick= {decrease}>Decrease</button>
    </div>

}

function Counter(){
    const count = useAtomValue(counterAtom);

    return <div>
        {count}
    </div>
}

function IsEven(){
    const value = useAtomValue(even)

    return <div>
        {value == 1 ? <p>odd</p> : <p>even</p>}
    </div>
}
