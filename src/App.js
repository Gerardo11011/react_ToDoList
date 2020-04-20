import React, {useEffect, useState, Component, useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import Prueba from './components/Prueba'
import Funcion from './components/Funcion'
import Message from './components/Message'
import CounterClass from './components/CounterClass'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EvenBinding from './components/EvenBind'
import ParentComponent from './components/ParentComponent'
import NameList from './components/NameList'
import CounterFunction from './components/CounterFunction'
import HookCounter from './components/HookCounter'
import HookCounterThree from './components/HookCounterThree'
import HookCounterFour from './components/HookCounterFour'
import ToDo from './components/ToDo'
import ToDoList from './components/ToDoList'
import  {v4 as uuidv4} from 'uuid'

const LOCAL_STORAGE_KEY = 'todoApp'



function App() {

  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    if(Array.isArray(todos) && todos.length){
      orderList()
    }
  }, [])

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const handleTodo = (event) => {
    event.preventDefault()
    const name = todoNameRef.current.value
    var today = new Date();
    var time = today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    if (name === '') return

    setTodos(prevTodo => {
      return [...prevTodo, {
        id: uuidv4(),
        name: name,
        complete: false,
        date: time
      }]
    })
    todoNameRef.current.value = null    
  }

  const toggledToDo = (id) => {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  const handleClearTodos = () => {
    const newTodos = [...todos]
    const completes = newTodos.filter(todo => !todo.complete)
    setTodos(completes)
  }

  const orderList = () => {
    const newTodos = [...todos]
    var completes = newTodos.sort((a, b) => a.name.localeCompare(b.name))
    console.log(completes);
    setTodos(completes)
  }

  const tama = todos.length

  if(Array.isArray(todos) && tama){
    return(
      <div className="App">
        <ToDoList todos={ todos.filter(todo => !todo.complete) } toggledToDo={ toggledToDo } order={ orderList }></ToDoList>
        <ToDoList todos={ todos.filter(todo => todo.complete) } toggledToDo={ toggledToDo } order={ orderList }></ToDoList>
        <form onSubmit={handleTodo}>
          <input type="text" ref={ todoNameRef }></input>
        </form>
        <button onClick={handleTodo}>Add ToDo</button>
        <button onClick={handleClearTodos}>Clear Complete ToDo</button>
        <button onClick={orderList}>Order</button>
        <div>{todos.filter(todo => !todo.complete).length} left to do</div>
      </div>
    )
  }  
  else {
    return (
    <div className="App">
      <h2>No hay elementos en la lista</h2>
      <form onSubmit={handleTodo}>
        <input type="text" ref={ todoNameRef }></input>
      </form>
      <button onClick={handleTodo}>Add ToDo</button>
      <button onClick={handleClearTodos}>Clear Complete ToDo</button>
      <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </div>
    )
  }
};

export default App;



  
        {/* <HookCounterFour></HookCounterFour> */}
  
        {/* <HookCounterThree></HookCounterThree> */}
  
       {/*  <HookCounter></HookCounter> */}
  
        {/* <CounterClass></CounterClass>
        <CounterFunction></CounterFunction> */}
  
        {/* <Form></Form> */}
  
       {/*  <NameList></NameList> */}
  
        {/* <ParentComponent></ParentComponent> */}
  
        {/* <EvenBinding></EvenBinding> */}
  
        {/* <FunctionClick></FunctionClick>
        <ClassClick></ClassClick> */}
  
        
        {/* <Message></Message> */}
  
        {/* <Funcion name="Gerardo">
          this is children props
        </Funcion>
        <Funcion name="Rocio">
          <button>Action</button>
        </Funcion>
        <Funcion name="Guillermo"></Funcion> */}
  
        {/* <Prueba name="Gerardo Clase">
          this is children props with this
        </Prueba>
        <Prueba name="Rocio Clase"></Prueba>
        <Prueba name="Memo Clase"></Prueba>
        <Prueba></Prueba> */}
  
       {/*  <Form></Form> */}