import React from 'react';
import CreateAlbum from '../CreateAlbum/CreateAlbum';

function Form() {
  return (
    <div>
      <form id='uploadForm' action='http://localhost:3000/photos' method='post' encType="multipart/form-data">
        <input type="file" name="photo" multiple/>
        <input type='submit' value='Upload!' />
      </form>
    </div>
  );
}

function PeopleList() {
  return (
    <div>
      <ul>
        <li>
          <p>Img</p>
          <p>Description</p>
        </li>
        <li>
          <p>Img</p>
          <p>Description</p>
        </li>
        <li>
          <p>Img</p>
          <p>Description</p>
        </li>
        <li>
          <p>Img</p>
          <p>Description</p>
        </li>
        <li>
          <p>Img</p>
          <p>Description</p>
        </li>
        <li>
          <p>Img</p>
          <p>Description</p>
        </li>
        <li>
          <p>Img</p>
          <p>Description</p>
        </li>
      </ul>
    </div>
  );
}

class Feedback extends React.Component {
  render() {
    return (
      <div>
        <h1>Feedback</h1>
        <PeopleList />
        <Form />
        <br/>
        <CreateAlbum />
      </div>
    );
  }
}

export default Feedback;