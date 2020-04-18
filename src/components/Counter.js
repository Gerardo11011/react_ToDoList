import React, { Component } from 'react'

class Counter extends Component {

    constructor(props){
        super(props)

        this.state = {
            count: 0
        }
    }

    handleClickIncrement(){
       /*  this.setState({
            count: this.state.count + 1
        }, () => {
            console.log("CALLBACK VALUE", this.state.count);
        }
         ) */

         //Para actualizar un componente basado en su antiguo estado
         //Se debe de pasar como funcion el antiguo estado
         // se puede declarar con parentesis el body o con return
        this.setState(prevState => ({
            count: prevState.count + 1
        }), () => {
            console.log(this.state.count);
        }
        )
    }


    render(){
        return(
            <div>
                <h1>Count</h1>
                <h3>{this.state.count}</h3>
                <button onClick={() => this.handleClickIncrement()}>Click me</button>
            </div>
        )
    }
}

export default Counter