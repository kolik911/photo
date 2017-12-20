import React, { Component } from 'react'; 

class AddPhotos extends Component {

  handleUploadImg = (e) => { 
    if (localStorage.key('token')) {
      fetch('/photos', {
        method: 'POST',
        body: new FormData(e.target),
        headers: {
          'token': localStorage.getItem('token')
        }
      })
    }else {
      alert('You must be logined')
    }
  }

  render() {
    return (
      <form onSubmit={this.handleUploadImg} className="add-photos">
        <input type="file"  name="photo" multiple />
        <input type='submit' className='btn btn-primary' value='Upload!' />
      </form>
    );
  }
}

export default AddPhotos;