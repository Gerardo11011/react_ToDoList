import React from 'react'

function Person({ person, index }) {
    return (
        <div>
            <h2>
            I am {person.name} with age {person.age} index {index}
            </h2>
        </div>
    )
}

export default Person
