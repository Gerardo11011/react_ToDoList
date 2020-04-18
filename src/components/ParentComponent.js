import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'parent'
        }
        this.greetParent = this.greetParent.bind(this)
        this.greetChild = this.greetChild.bind(this)
    }

    greetParent(){
        alert(`Hello ${this.state.parentName}`)
    }

    greetChild(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    
    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent} greetHandlerChild={this.greetChild}>
                </ChildComponent>

            </div>
        )
    }
}

export default ParentComponent
