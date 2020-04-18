import React, { Component } from 'react'

class Form extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       username: ""
    }
    //this.handleUsernameChange = this.handleUsernameChange.bind(this)
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  
  render() {
    return (
      <div>
        <label>Username</label>
        {/* <input type="text" value={this.state.Username} onChange={this.handleUsernameChange}></input> */}
        <input type="text" value={this.state.username} onChange={this.handleUsernameChange}></input>
      </div>
    )
  }
}

export default Form
