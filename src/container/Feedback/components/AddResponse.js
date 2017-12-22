import React, { Component } from 'react';

class AddResponse extends Component {

  

  handleSubmit = (e) => {
    if (localStorage.getItem('token')) {
      fetch('/api/fb', {
        method: 'POST',
        body: new FormData(e.target),
        headers: {
          'token': localStorage.getItem('token')
        }
      })
    }else {
      alert('You must be logined');
    }
  }

  

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='file' name='path' className='add-response-file' />  
        <textarea name="description" className='form-control' rows="6" ></textarea>
        <br/>
        <input type='submit' className='btn btn-primary' />
      </form>
    );
  }
}

export default AddResponse;