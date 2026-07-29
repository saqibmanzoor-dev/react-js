import { useState, useEffect, use } from 'react'


// function App() {

        
//       let [counterVisible , SetcounterVisible] = useState(true)


//       useEffect(() => {
//   setInterval(() => {
//     SetcounterVisible(counterVisible => !counterVisible);
//   }, 5000);
// }, []);


      
//        return (
//        <div>
         

//           {counterVisible ? <Counter></Counter> : null}

//         </div>)
// }
//       /// monting rerendering , unmouting
//         function Counter(){

//           const [Count , setCount] = useState(0)
         
          
//            // hooking into the lifecycle events of react
//           //  

// //             // we wanted to guaard our interval
// //          useEffect(()=>
// //   {let clock = setInterval(function(){
// //     console.log("from inside setInterval");
    
// //     setCount(Count => Count + 1)
// //   },1000)

// //   return ()=>{clearInterval(clock)
// //     console.log("unmounted");
    
// //   }
// // }
// // ,[])  //depedency array , clean up , fetch inside the useffect
          
          

//           function increaseCount(){
//              setCount(count + 1)
          
//           }
          
        
//           return <div>
//             <h1 id='count'>{Count}</h1>
//             <button onClick={increaseCount}>
//               increase count
//             </button>
            
//           </div>
//         } 
 
        
    // re_learning cleanup , useeffect . learning  about depedency array
 
        function  App(){
          const[count , setCount] = useState(0)
          const[count2 , setCount2] = useState(0)


          function increase(){
            setCount(c => c + 1)
          }
          function decrease(){

            setCount2(c => c  - 1)
          }






           
          return (
            <div>
              <Counter count = {count} count2 = {count2}/>
              <button onClick={increase}>Increase Count</button>
              <button onClick={decrease}>descrease Count</button>
            </div>
          )
        }

        function Counter(props){

        useEffect((()=>{
        console.log("mount");
        


          return ()=>{
            console.log("unmount");
            
          }
        }),[])

        useEffect(function(){
          console.log("count has changed");


          return function(){
            //second time count changes it will clean up all 
            console.log("clean up inside the second effect");
            
          }
          
        },[props.count])

        return <div>counter {props.count}  <br />
        counter {props.count2}</div>
        }

export default App
