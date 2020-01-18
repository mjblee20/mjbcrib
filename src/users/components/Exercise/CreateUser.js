import React, { Component } from 'react';

import API from './../../../shared/utils/API';

class CreateUser extends Component {
  constructor(props) {
    super(props);
    
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    this.state = {
      username: "",
    }
  }

  onChangeUsername(event) {
    this.setState({
      username: event.target.value,
    })
  }

  onSubmit(event) {
    event.preventDefault();

    const user = {
      username: this.state.username,
    }

    console.log(user);
    
    API.post('/users/add', user)
    .then(res => console.log(res.data));

    this.setState({
      username: "",
    })
  }

  render() {
    return (
      <div>
      <h3>Create a New Exercise</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Username: </label>
            <input type='text' required className='form-control' onChange={this.onChangeUsername} value={this.state.username}/>
          </div>
          <div className='form-group'>
            <input type='submit' value='create new user' className='btn btn-primary' />
          </div>
        </form>
      </div>
    )
  }
}

export default CreateUser;