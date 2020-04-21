import React, { useState } from 'react'

function HookCounter() {
    const initialCount = 0
    const [count, setcount] = useState(initialCount)

    const incrementByFive = () =>{
        for (let index = 0; index < 5; index++) {
            //Crear una funcion que pase como valor el valor anterior
            setcount(prevCount => prevCount + 1)
        }
    }

     
    return (
        <div>
            Count: {count} 
            <br></br>
            <button onClick={() => setcount(initialCount)}>Reset</button>
            <button onClick={() => setcount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setcount(prevCount => prevCount - 1)}>Decrement</button>

            <button onClick={incrementByFive}>Incremebt by 5</button>

        </div>
    )
}

export default HookCounter
