import React, { Component } from 'react'

import CreateUser from './../components/CreateUser';
export class User extends Component { 

  render() {
    return (
      <div>
        <h1>Users</h1>

        <CreateUser />
      </div>
    )
  }
}

export default User;
