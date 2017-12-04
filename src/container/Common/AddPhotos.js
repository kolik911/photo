import React, { Component } from 'react'; 

class AddPhotos extends Component {
  render() {
    return (
      <form id='uploadForm' action='http://localhost:3000/photos' method='post' encType="multipart/form-data" className="add-photos">
        <input type="file" name="photo" multiple />
        <input type='submit' value='Upload!' />
      </form>
    );
  }
}

export default AddPhotos;