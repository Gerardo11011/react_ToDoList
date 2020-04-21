import React, { Component } from 'react'

class Prueba extends Component{
    render(){
        const {name, children} = this.props
        return(
            <div>
                <h1>Clase {name}</h1>
                {children}
            </div>
        )
    }
}

export default Prueba