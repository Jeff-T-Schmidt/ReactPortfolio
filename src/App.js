import Todo from "./components/Todo";
import React, { useState } from "react";
import Form from "./components/Form";

function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    text: "pet the cat",
    priority: "high"
  },
  {
    id: 2,
    text: "pet the cat",
    priority: "med"
  }
  ])


  const addTodo = todoObj=> {
    if (!todos.length) {
      todoObj.id=1
    }else{
      todoObj.id = todos[todos.length-1].id+1
    }
    setTodos([...todos,todoObj])
  }
  const deleteTodo = id=> {
    console.log("Inside the delete function")
    console.log(id);
    setTodos(todos.filter(todoObj=>todoObj.id!==id))
  }
  const editTodo = editObj=>{
    const editedTodos = todos.map(todo=>{
      if (todo.id ===editObj.id) {
        return editObj
      }else{
        return todo
      }
    })
    setTodos(editedTodos)
  }

  return (
    <div className="App">
      <Form addTodo={addTodo}/>
      {todos.map((todoObj)=><Todo key={todoObj.id} text={todoObj.text} priority={todoObj.priority} delete={deleteTodo} id={todoObj.id} edit={editTodo} />)}

    </div>
  );
}

export default App;
