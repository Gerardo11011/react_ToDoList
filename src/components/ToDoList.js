import React from 'react'
import ToDo from './ToDo'



function ToDoList({ todos, toggledToDo, deleteTodo }) {

    const orderList = (lista) => {
        const newTodos = [...lista]
        var completes = newTodos.sort((a, b) => b.name.localeCompare(a.name))
        return completes
      }

    const lista = orderList(todos)
    return (
        lista.map(todo => {
            return(
                <ToDo key={ todo.id } todo={ todo } toggledToDo={ toggledToDo } deleteTodo={ deleteTodo }></ToDo>
            )
        })
    )
}

export default ToDoList
