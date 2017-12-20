import React, { Component } from 'react';

class AddResponse extends Component {

  

  handleSubmit = (e) => {
    fetch('/fb', {
      method: 'POST',
      body: new FormData(e.target)
    })
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