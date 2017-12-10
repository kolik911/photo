import React, { Component } from 'react';
// import request from './utils/auth.js'

class Admin extends Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     username: null,
  //     password: null,
  //     token: null,
  //     message: null
  //   }
  // }

  // handleChangeUsername = (e) => {
  //   this.setState({
  //     username: e.target.value
  //   })
  // }
  // handleChangePassworde = (e) => {
  //   this.setState({
  //     password: e.target.value
  //   })
  // }

  handleLoginSubmit = (e) => {
    e.preventDefault();
    // console.log(e.targer)
    fetch('/api/authenicate', {
      method: "POST",
      body: new FormData(e.target)
    })
      .then(d => d.json())
      .then(d =>
        localStorage.setItem('token', d.token)
      ) 
  }

  handleListUsers = () => {
    fetch('/api/list-users', {
      method: 'GET',
      headers: {
        'token': localStorage.getItem('token')
      }
    })
      .then(d => d.json())
      .then(d => console.log(d))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleLoginSubmit}>
          <label>Login</label>
          <br/>
          <input type='text' className='form-control aaa'   name='username' placeholder='name' />
          <br />
          <input type="password" className='form-control'   name='password' placeholder='password' />
          <br />
          <button className='btn btn-default' type='submit'>Send</button>
        </form>
        <button type='button' onClick={this.handleListUsers}>aaa</button>
      </div>
    );
  }
}



export default Admin;