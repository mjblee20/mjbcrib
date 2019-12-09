import React, { Component } from 'react'

class CreateUser extends Component {
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

export default CreateUser