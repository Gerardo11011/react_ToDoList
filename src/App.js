import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { v4 as uuidv4 } from "uuid";
import ToDoList from "./components/ToDoList";
import Radio from "./components/Radio";
import ToDoMessages from "./components/ToDoMesages";
import ToDo from "./components/ToDo";

const LOCAL_STORAGE_KEY = "todoApp";

function App() {
  document.body.style = "background-color: #405189";

  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();
  const pending = todos.filter((todo) => !todo.complete);
  const completes = todos.filter((todo) => todo.complete);

  useEffect(() => {
    console.log("render");
    if (pending.length) {
      document.title = `ToDo List ${pending.length} Task Pending `;
    } else {
      document.title = `ToDo List`;
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
                    <h4 className="card-title"> Todo list </h4>
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
                      <h6> Todo </h6>
                      <ToDoMessages list={pending} toggledToDo={toggledToDo} deleteTodo={deleteTodo} message={true}></ToDoMessages>
                      <h6> Done </h6>
                      <ToDoMessages list={completes} toggledToDo={toggledToDo} deleteTodo={deleteTodo} message={false}></ToDoMessages>
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
                    <h4 className="card-title"> Todo list </h4>
                    <form className="add-items d-flex" onSubmit={handleTodo}>
                      <input ref={todoNameRef} type="text" className="form-control todo-list-input" placeholder="What do you need to do today?" />
                      <Button className="add btn btn-success font-weight-bold todo-list-add-btn" onClick={handleTodo}>
                        Add
                      </Button>
                    </form>
                    <div className="list-wrapper" placeholder="No elements in the list">
                      <p id="foo"> Great!, you have no pending tasks </p>
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
