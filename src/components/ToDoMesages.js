import React from "react";
import ToDoList from "./ToDoList";

function ToDoMesages({ list, message }) {
  const todoList = (
    <ul className="d-flex flex-column-reverse todo-list">
      <ToDoList todos={list}></ToDoList>
    </ul>
  );

  const todoMessagePending = <p id="foo"> Great!, you have completed all your tasks </p>;
  const todoMessageDone = <p id="foo"> It seems we have some work today </p>;
  var messageSent;
  if (message) {
    messageSent = todoMessagePending;
  } else {
    messageSent = todoMessageDone;
  }

  return <div>{list.length ? todoList : messageSent}</div>;
}

export default ToDoMesages;
