function App(){
  const todos = [{
    title : "go to gym",
    done : false

  },
{
    title : "go to school",
    done : false

  }]


  const todoComponent = todos.map(todo=> <Todo
    title={todo.title} done = {todo.done} />
  )

  return  <div>
      {todoComponent}
  </div>
}


function Todo({title , done}){

  return <div>
    {title} - {done? "done" : "not done"}
  </div>
}
