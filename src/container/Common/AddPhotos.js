import React, { Component } from 'react'; 

class AddPhotos extends Component {

  handleUploadImg = (e) => {
    fetch('/photos', {
      method: 'POST',
      body: new FormData(e.target)
    })
  }

  render() {
    return (
      <form onSubmit={this.handleUploadImg} className="add-photos">
        <input type="file"  name="photo" multiple />
        <input type='submit' value='Upload!' />
      </form>
    );
  }
}

export default AddPhotos;