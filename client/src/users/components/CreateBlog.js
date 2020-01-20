import React, { Component } from 'react'

class CreateBlog extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeBlog = this.onChangeBlog.bind(this);

    this.state = {
      title: '',
      content: '',
      date: new Date(),
    }
  }

  onChangeBlog() {

  }

  onSubmit() {

  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>

        </form>
      </div>
    )
  }
}

export default CreateBlog
