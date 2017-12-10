import React, { Component } from 'react';

class CreateAlbum extends Component {

  handleSubmit = (e) => {
    fetch('/album', {
      method: 'POST',
      body: new FormData(e.target)
    })
  }

  render() {
    return (
      <div className=''>
        <form className="create-album" onSubmit={this.handleSubmit}>
          <input type="text" className='form-control' name="createAlbum" placeholder="Title new album" />
          <input type="submit" className='btn btn-default' />
        </form>
      </div>
    );
  }
}

export default CreateAlbum;