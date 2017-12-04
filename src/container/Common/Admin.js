import React, { Component } from 'react';

class Admin extends Component{
  

  render() {
    return (
      <div>
        <form method='post' action='/api/authenicate'>
          <input type='text' placeholder='name' name='username'/> 
          <br/>
          <input type='text' placeholder='password' name='password'/>
          <br/>
          <button type='submit'>Send</button>
        </form>
      </div>  
    );
  }
}



export default Admin;