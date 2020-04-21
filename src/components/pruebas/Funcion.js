import React from 'react'

function Funcion(props){
    const {name, children} = props    
    return(
        <div>
            <h1>Fucnion {name}</h1>
            {children}
        </div>
        
    )
}

export default Funcion