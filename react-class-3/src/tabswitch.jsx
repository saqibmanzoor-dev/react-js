import { useState, useEffect } from "react";


function App(){
  const [currentTab , setCurrentTab] = useState(1)
  const [tabData , setTabdata] = useState({})
  const [loading , setLoading] = useState(true)

   useEffect(()=>{
    //send backend request to get data for this tab

    // console.log("send request to backend to get data for " + currentTab);
    setLoading(true)

    fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab).then(async (res) =>{
       
      const response = await res.json()
      
       setTabdata(response)
       setLoading(false)
       

    })
    
    
   },[currentTab])
  return <div>

    <button onClick={function(){
      setCurrentTab(1)
    }} style={{color: currentTab== 1 ? "red ": null}}>todo1</button>
    <button  onClick={function(){
      setCurrentTab(2)
    }} style={{color: currentTab== 2 ? "green": null}}>todo2</button>
    <button onClick={function(){
      setCurrentTab(3)
    }} style={{color: currentTab== 3? "purple" : null}}>todo 3</button>
    <button onClick={function(){
      setCurrentTab(4)
    }} style={{color: currentTab== 4 ?'blue': null}}>todo 4</button>
     <br />
    

    {loading ? "loading...." : tabData.title}
    
  </div>
}
