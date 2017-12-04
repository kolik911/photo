import React, { Component } from 'react';

class CreateAlbum extends Component {
  render() {
    return (
      <form method="post" action="http://localhost:3000/album" encType="multipart/form-data" className="create-album" id='createAlbum'>
        <input type="text" name="createAlbum" placeholder="Title new album" />
        <input type="submit" />
      </form>
    );
  }
}

export default CreateAlbum;