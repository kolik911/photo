import React, {Component} from 'react'; 
 
function Create() {
  return (
    <form method="post" action="http://localhost:3000/create" encType="multipart/form-data" id='createAlbum'>
      <input type="text" name="createAlbum" />
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