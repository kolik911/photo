import React from 'react';
import Select from '../../Common/Selector';
import Photo from './Photo';
import DelAlbum from '../../Common/DelAlbum';

class PhotoGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      albums: [],
      addToAlbum: '',
      selectedPhotos: []
    };
  }

  handleSelectAlbum = (id) => {
    fetch('/photos/' + id)
      .then(d => d.json())
      .then(d =>
        this.setState({
          photos: d,
          selectedPhotos: []
        })
      );
  }

  handleDeleteById = (id) => {
    const data = new FormData();
    data.append("id", id);
    fetch('/album/delete', {
      method: 'POST',
      body: data
    })
    document.getElementById(id).remove();
  }

  handleDeleteImg = (id) => {
    const data = new FormData();
    data.append("id", id);
    fetch('/photos/delete', {
      method: 'POST',
      body: data
    })
    document.getElementById(id).remove();
  }

  handlePhotoSelect = (selectedPhoto) => {
    if (selectedPhoto.checked) {
      this.setState(prevState => {
        return { selectedPhotos: [...prevState.selectedPhotos, selectedPhoto.id] };
      });
    } else {
      this.setState(prevState => {
        return { selectedPhotos: prevState.selectedPhotos.filter(id => id !== selectedPhoto.id) };
      });
    }
  }

  handleAddToAlbum = (id) => {
    this.setState({
      addToAlbum: id
    });
  }

  handleAddPhotoToAlbum = () => {
    const data = new FormData();
    data.append("albumId", this.state.addToAlbum);
    data.append("imgIds", JSON.stringify(this.state.selectedPhotos));
    fetch('/album/addPhotos',
      {
        method: 'post',
        body: data
      })
      .then(d => d.json())
      .then(d =>
        this.setState(prevState => ({
          selectedPhotos: [],
          addToAlbum: '',
          photos: prevState.photos.map(e => Object.assign({}, e))
        }))
      );
  }

  componentDidMount() {
    const urlImg = '/photos';
    const urlSelect = '/album/list';

    fetch(urlImg)
      .then(d => d.json())
      .then(d =>
        this.setState({
          photos: d
        })
      );

    fetch(urlSelect)
      .then(d => d.json())
      .then(d =>
        this.setState({
          albums: d
        })
      );
  }


  render() {
    const { photos, selectedPhotos, addToAlbum, albums } = this.state;
    return (
      <div>
        Filter: <Select data={albums} onChange={this.handleSelectAlbum} />
        {selectedPhotos.length ?
          <span>Add selected photo to:
            <Select data={albums} onChange={this.handleAddToAlbum} />
          </span> : '' 
        }
        {addToAlbum && selectedPhotos.length ? <button onClick={this.handleAddPhotoToAlbum}>Send</button> : ''}
        <div className="photos-container">
          {photos.map(item =>
            <Photo
              key={item._id}
              image={item}
              onSelect={this.handlePhotoSelect}
              deleteImg={this.handleDeleteImg}
            />)}
        </div>
        <DelAlbum data={albums} takeId={this.handleDeleteById} />
      </div>
    );
  }
}

export default PhotoGrid;
