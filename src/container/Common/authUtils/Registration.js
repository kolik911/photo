import React, { Component } from 'react';

class Registration extends Component {

  constructor() {
    super();
    this.state = {
      password: null,
      confirmPass: null
    }
  }

  handlePass = (e) => {
    this.setState({ 
      password: e.target.value
    })
  }

  handleConfPass = (e) => { 
    this.setState({
      confirmPass: e.target.value
    })
  }

  handleRegistration = (e) => {
    e.preventDefault();
    fetch('/api/registration', {
      method: 'POST',
      body: new FormData(e.target)
    })
  }

  render() {
    const { password, confirmPass } = this.state;
    return (
      <div>
        <form onSubmit={this.handleRegistration}>
          <label>Registration</label>
          <br />
          <input type='text' className='form-control' placeholder='Enter name' name='username' />
          <br />
          <input type='password' className='form-control' onChange={this.handlePass} placeholder='Enter password' />
          <br />
          <input type='password' className='form-control' onChange={this.handleConfPass} placeholder='Confirm password' name='password' />
          <br />
          {password === confirmPass && password !== null && confirmPass !== null ? <button className='btn btn-primary' type='submit'>Send</button> : ''}
        </form>
      </div>
    );
  }
}

export default Registration;