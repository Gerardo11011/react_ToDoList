import React, { Component } from 'react'

class EvenBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: "Hello world"
        }
        //this.clickHandler = this.clickHandler.bind(this)
    }

    /* clickHandler() {
        var aux = this.auxiliar() 
        this.setState({
            message: aux
        }, () => {
            console.log(this.state.message);
        })
    } */

    clickHandler = () => {
        var aux = this.auxiliar() 
        this.setState({
            message: aux
        }, () => {
            console.log(this.state.message);
        })
    }

    auxiliar() {
        var x;
        if (this.state.message === "Hello world"){
            x = "Goodbye"
            
        }
        else {
            x = "Hello world"
            
        }
        return x;
    }
    


    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandle}>Click</button> */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EvenBind
