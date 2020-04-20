import React from 'react'
import ToDo from './ToDo'



function ToDoList({ todos, toggledToDo }) {

    const orderList = (lista) => {
        const newTodos = [...lista]
        var completes = newTodos.sort((a, b) => a.name.localeCompare(b.name))
        return completes
      }

    const lista = orderList(todos)
    return (
        
        lista.map(todo => {
            return <ToDo key={ todo.id } todo={ todo } toggledToDo={ toggledToDo }></ToDo>
        })
    )
}

export default ToDoList
