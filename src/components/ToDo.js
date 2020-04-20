import React from 'react'

function ToDo({ todo, toggledToDo }) {

    function handleToDoClick() {
        toggledToDo(todo.id)
    }


    return (
        <li>
            <div className={todo.complete ? "done" : "undone"}>
                <input className="checkbox" checked={todo.complete} onChange={handleToDoClick} type="checkbox" name="cheked" id="checked"/>
                {todo.name}
            </div>
            {/* <input type="checkbox" checked={todo.complete} onChange={handleToDoClick}></input>
                {todo.name} */}
        </li>
    )
}

export default ToDo
