import { useEffect, useState } from "react";
import useCounter from "./hooks/useCounter";
import usePostTitle, { useFetch } from "./hooks/useFetch";
function App() {
  const [currentPost , setCurrentPost] = useState(1)
       
  const postTitle = usePostTitle();

  const {finalData , loading} = useFetch('' , 10)


  if(loading){
    return <div>
      loading...
    </div>
  }

  
  return (
   <div>
     <button onClick={()=>{
setCurrentPost(1)
     }}> post 1</button>
     <button onClick={()=>{
setCurrentPost(2)
     }}> post 2</button>
     <button onClick={()=>{
setCurrentPost(3)
     }}> post 3</button>
     
      {JSON.stringfy(finalData)}
   </div>
  )
}

export default App;
