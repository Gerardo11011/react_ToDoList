import React, { Component } from 'react'
import FormAux from './FormAux'

class Form extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       username: "",
       comments: "",
       topic: "React",
       listaUsername: []
    }
    //this.handleInput = this.handleInput.bind(this)
  }

  

  handleInput = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handleTextArea = (event) => {
    this.setState({
      comments: event.target.value
    })
  }

  handleSelect = (event) => {
    this.setState({
      topic: event.target.value
    })
  }

  handleSubmitForm = (event) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    event.preventDefault()
  }

  render() {
    const { username, topic, comments } = this.state
    const valores = ["React", "Vue", "Angular"]
    const mapping = valores.map((valor, index) => (
      <FormAux key={valor} valor={valor}></FormAux>
    ))
    
    return (
      <form onSubmit={this.handleSubmitForm}>
         <div>
          <label>Username</label>
          {/* <input type="text" value={this.state.Username} onChange={this.handleUsernameChange}></input> */}
          <input type="text" value={username} onChange={this.handleInput}></input>
        </div>

       <div>
         <label>Comments</label>
         <textarea value={comments} onChange={this.handleTextArea}></textarea>
       </div>

       <div>
         <label>Topic</label>
         <select value={topic} onChange={this.handleSelect}>
           {mapping}
         </select>
       </div>

       <button type="submit">Submit</button>
      
      </form>
     
    )
  }
}

export default Form
