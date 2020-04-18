import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={props.greetHandler}>Greet Parent</button>
            <br></br>
            <button onClick={() => props.greetHandlerChild('child Component')}>Greet Parent From Child</button>
        </div>
    )
}

export default ChildComponent
