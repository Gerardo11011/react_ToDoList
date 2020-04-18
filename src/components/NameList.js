import React from 'react'
import Person from './Person'

function NameList() {
    const names = ["Bruce", "Clarck", "Diana"]
    const persons = [
        {
            id: 0,
            name: "Gerardo",
            lastanme:"Ponce",
            age: 22
        },
        {
            id: 1,
            name: "Rocio",
            lastanme:"Orozco",
            age: 22
        },
        {
            id: 3,
            name: "Ironias",
            lastanme:"Nose",
            age: 24
        },
        {
            id: 4,
            name: "Pablo",
            lastanme:"Ascanio",
            age: 20
        }
    ]

    //Each child in a list should have a unique key
    //El primer parametro es el elemento del arreglo
    //El segundo parametro es el index
    //El tercero es el arreglo entero
    const nameList = names.map((name, index, prueba, prueba3) => <h2 key={index}>{name} {index}</h2>)
    const personList = persons.map((person, index) => (
        <Person key={person.id} person={person} index={index}></Person>
    ))
    return (
        <div>
            {personList}
        </div>
    )
}

export default NameList
