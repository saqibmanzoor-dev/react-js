import { useState } from "react";

function App() {
  
  // react hook forms, useref
  //


  const [todos , setTodos] = useState([{
    title : "go to gym", 
    desc : "hiii there gym regularly",
    done : false

  }])

  function addTodo(){
    let newArray  = [...todos]
    newArray.push({
    title : document.getElementById('title').value, 
    desc : document.getElementById('desc').value,
    done : true

  })
    setTodos(newArray)
  }
  return  <div>
       
       <input type="text" name="" id="title" placeholder="title" />
       <input type="text" name="" id="desc" placeholder="desc" />
       <br />

      <button onClick={addTodo}> Add a Todo</button>
      <br />
      {JSON.stringify(todos)}
       <br />
      {todos.map((todo)=>(<Todo title = {todo.title} 
      desc = {todo.desc} 
      done = {todo.done}/>))}
    </div>
   
  
      }
function Todo(props){

  return (<div>
    <h1>{props.title}</h1>
    <h1>{props.desc}</h1>
    <h1>{props.done ? "task is completed" : "task is not completed"}</h1>
  </div>
)
}

export default App;