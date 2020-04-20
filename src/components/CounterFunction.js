import React, { useState } from 'react'

function CounterFunction() {

    const [counter, setcounter] = useState(0)

   function  clickHandler () {
        setcounter(counter + 1)
    }


    return (
        <div>
            <button onClick={() => clickHandler()}>Count {counter}</button>            
        </div>
    )
}

export default CounterFunction
