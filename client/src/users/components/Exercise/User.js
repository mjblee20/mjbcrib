import React, { Component } from 'react'

import CreateUser from './CreateUser';
export class User extends Component { 

  render() {
    return (
      <div>
        <h1>Users</h1>
        {/* TODO: Create a list of all users */}
        <CreateUser />
      </div>
    )
  }
}

export default User;
