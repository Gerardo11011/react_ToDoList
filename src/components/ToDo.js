import React from 'react'

function ToDo({ todo, toggledToDo }) {

    function handleToDoClick() {
        toggledToDo(todo.id)
    }


    return (
        <div className={todo.complete ? "completado" : "incompleto"}>
            <label>
                <input type="checkbox" checked={todo.complete} onChange={handleToDoClick}></input>
                {todo.name}
            </label>
        </div>
    )
}

export default ToDo
