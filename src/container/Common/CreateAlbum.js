import React, {Component} from 'react'; 
 
function Create() {
  return (
    <form method="post" action="http://localhost:3000/album" encType="multipart/form-data" id='createAlbum'>
      <input type="text" name="createAlbum" placeholder="Title new album"/>
      <input type="submit" />
    </form>
  );
}

class CreateAlbum extends Component {
  render() {
    return (
      <div>
        <Create />
      </div>
    );
  }
}

export default CreateAlbum;