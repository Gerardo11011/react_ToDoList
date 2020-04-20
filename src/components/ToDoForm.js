import React, {useEffect, useState, Component}  from 'react'

function Form(){
    const [newTodo, setNewTodo] = useState("")
    const[todos, setTodos] = useState([])
  
    const handleNewTodoChange = (e) => {
      e.preventDefault()
      setNewTodo(e.target.value)
    }
  
    const handleNewTodo = (e) => {
      e.preventDefault()
      if (newTodo === '') return
      setTodos([...todos, {id: Date.now(), text: newTodo}])
      e.target.reset()
      setNewTodo('')
    }
  
    return(
      <div className = "App">
        <h1>TODO</h1>
        <form onSubmit={handleNewTodo}>
          <input placeholder="Your todo..." onChange={handleNewTodoChange} />
        </form>
        <ul>
          {todos.map((todo) => (
            <li>{todo.text}</li>
          ))}
        </ul>
  
      </div>
    )
}

export default Form