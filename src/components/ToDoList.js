import React from "react";
import ToDo from "./ToDo";

function ToDoList({ todos }) {
  const orderList = () => {
    const newTodos = [...todos];
    var completes = newTodos.sort((a, b) => b.name.localeCompare(a.name));
    return completes;
  };

  const lista = orderList();
  return lista.map((todo) => {
    return <ToDo key={todo.id} todo={todo}></ToDo>;
  });
}

export default ToDoList;
