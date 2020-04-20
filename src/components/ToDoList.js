import React from 'react'
import ToDo from './ToDo'

function ToDoList({ todos, toggledToDo }) {
    return (
        todos.map(todo => {
            return <ToDo key={ todo.id } todo={ todo } toggledToDo={ toggledToDo }></ToDo>
        })
    )
}

export default ToDoList
