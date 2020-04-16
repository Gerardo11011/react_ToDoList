import React, {useEffect, useState, Component} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [newTodo, setNewTodo] = useState("")
  const[todos, setTodos] = useState([])

  function handleNewTodoChange(e){
    e.preventDefault()
    setNewTodo(e.target.value)
  }

  function handleNewTodo(e){
    e.preventDefault()
    if (newTodo === '') return
    setTodos([...todos, {id: Date.now(), text: newTodo}])
    e.target.reset()
  }

  return(
    <div className = "demoComponent">
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
};

export default App;
