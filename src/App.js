import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { v4 as uuidv4 } from "uuid";
import ToDoList from "./components/ToDoList";
import Radio from "./components/Radio";

const LOCAL_STORAGE_KEY = "todoApp";

function App() {
  document.body.style = "background-color: #405189";

  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();
  const pending = todos.filter((todo) => !todo.complete);

  useEffect(() => {
    console.log("render");
    if (pending.length) {
      document.title = `ToDo List ${pending.length} Task Pending `;
    } else {
      document.title = `Todo List`;
    }
  }, [pending.length]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const handleTodo = (event) => {
    event.preventDefault();
    const name = todoNameRef.current.value;
    var today = new Date();
    var time =
      today.getDate() +
      "/" +
      today.getMonth() +
      "/" +
      today.getFullYear() +
      " " +
      today.getHours() +
      ":" +
      today.getMinutes() +
      ":" +
      today.getSeconds();

    if (name === "") return;

    setTodos((prevTodo) => {
      return [
        ...prevTodo,
        {
          id: uuidv4(),
          name: name,
          complete: false,
          date: time,
        },
      ];
    });
    todoNameRef.current.value = null;
  };

  const toggledToDo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  };

  const handleClearTodos = () => {
    const newTodos = [...todos];
    const completes = newTodos.filter((todo) => !todo.complete);
    setTodos(completes);
  };

  const deleteTodo = (id) => {
    const newTodos = [...todos];
    const completes = newTodos.filter((todo) => todo.id !== id);
    setTodos(completes);
  };

  const todoPending = (
    <ul className="d-flex flex-column-reverse todo-list">
      <ToDoList todos={pending} toggledToDo={toggledToDo} deleteTodo={deleteTodo}></ToDoList>
    </ul>
  );

  const todoPendingComplete = <p id="foo"> Great, you have completed all your tasks </p>;

  const tama = todos.length;
  if (Array.isArray(todos) && tama) {
    return (
      <div className="App">
        <div className="page-content page-container" id="page-content">
          <div className="padding">
            <div className="row container d-flex justify-content-center">
              <div className="col-lg-12">
                <div className="card px-3" id="cardColor">
                  <div className="card-body">
                    <h4 className="card-title"> Awesome Todo list </h4>
                    {/* <Radio></Radio> */}
                    <form className="add-items d-flex" onSubmit={handleTodo}>
                      <input ref={todoNameRef} type="text" className="form-control todo-list-input" placeholder="What do you need to do today?" />
                      <Button className="add btn btn-success font-weight-bold todo-list-add-btn" onClick={handleTodo}>
                        Add
                      </Button>
                      <Button className="add btn btn-danger font-weight-bold todo-list-add-btn" onClick={handleClearTodos}>
                        Clear
                      </Button>
                    </form>
                    <div className="list-wrapper">
                      <h5> Todo </h5>
                      {pending.length ? todoPending : todoPendingComplete}
                      <h5> Done </h5>
                      <ul className="d-flex flex-column-reverse todo-list">
                        <ToDoList todos={todos.filter((todo) => todo.complete)} toggledToDo={toggledToDo} deleteTodo={deleteTodo}></ToDoList>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <div className="page-content page-container" id="page-content">
          <div className="padding">
            <div className="row container d-flex justify-content-center">
              <div className="col-lg-12">
                <div className="card px-3">
                  <div className="card-body">
                    <h4 className="card-title"> Awesome Todo list </h4>
                    <form className="add-items d-flex" onSubmit={handleTodo}>
                      <input ref={todoNameRef} type="text" className="form-control todo-list-input" placeholder="What do you need to do today?" />
                      <Button className="add btn btn-success font-weight-bold todo-list-add-btn" onClick={handleTodo}>
                        Add{" "}
                      </Button>
                    </form>
                    <div className="list-wrapper" placeholder="No elements in the list">
                      <p id="foo"> Great, you have no pending task </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
