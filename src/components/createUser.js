import React, { Component } from 'react'

export class createUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
    }
  }
  
  render() {
    return (
      <div>
        <p>Create User</p>
      </div>
    )
  }
}

export default createUser.js
