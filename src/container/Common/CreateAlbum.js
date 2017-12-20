import React, { Component } from 'react';

class CreateAlbum extends Component {

  handleSubmit = (e) => {
    // e.preventDefault();
    // this.props.onAdded(e.);
    if (localStorage.key('token')) {
      fetch('/api/album', {
        method: 'POST',
        body: new FormData(e.target),
        headers: {
          'token': localStorage.getItem('token')
        }
      })
        .then(d => d.json())
        .then(album => {
          this.props.onCreated && this.props.onCreated(album);
        });
      e.target.reset();
    } else {
      alert('You must login');
    }

  }

  render() {
    return (
      <div className=''>
        <form className="create-album" onSubmit={this.handleSubmit}>
          <input type="text" className='form-control' name="createAlbum" placeholder="Title new album" />
          <input type="submit" className='btn btn-primary' />
        </form>
      </div>
    );
  }
}

export default CreateAlbum;