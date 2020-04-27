import React, { useContext } from "react";
import { toggledToDoContext, deleteTodoContext } from "../App";
function ToDo({ todo }) {
  const toggledToDo = useContext(toggledToDoContext);
  const deleteTodo = useContext(deleteTodoContext);

  function handleToDoClick() {
    toggledToDo(todo.id);
  }
  function handleToDelete() {
    deleteTodo(todo.id);
  }

  return (
    <li className={todo.complete ? "completed" : ""}>
      <div className="form-check">
        <label className="form-check-label">
          {todo.name}
          <input className="checkbox" type="checkbox" checked={todo.complete} onChange={handleToDoClick} />
          <i className="input-helper"></i>
        </label>
      </div>
      <i className="remove mdi mdi-close-circle-outline" onClick={handleToDelete}></i>
    </li>
  );
}

export default ToDo;
