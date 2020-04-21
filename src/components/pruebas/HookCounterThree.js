import React, { useState } from 'react'

function HookCounterThree() {
    
    const [name, setname] = useState({firstName: "", lastName: ""})

    return (
        <div>
            <label>Firstname</label>
            <input
                type="text" 
                value={name.firstName} 
                onChange={(event) => setname( { ...name, firstName: event.target.value } )}></input>

            <label>lastName</label>
            <input 
                type="text" 
                value={name.lastName}
                onChange={(event) => setname( { ...name, lastName: event.target.value } )}></input>

            <h2>Your firstName is {name.firstName}</h2>
            <h2>Your lastName is {name.lastName}</h2>
            <h2>{ JSON.stringify(name) }</h2>

        </div>
    )
}

export default HookCounterThree
