import React from 'react';
import Select from '../../Common/Selector';
import Photo from './Photo';
import DelAlbum from '../../Common/DelAlbum';
// import { locale } from 'moment';

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


  handleDeleteImg = (id) => {
    if (localStorage.key('token')) {
      const data = new FormData();
      data.append("id", id);
      fetch('/api/photos/delete', {
        method: 'POST',
        body: data,
        headers: {
          'token': localStorage.getItem('token')
        }
      })
      document.getElementById(id).remove();
    } else {
      alert('You must be logined')
    }
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
    if (localStorage.key('token')) {
      const data = new FormData();
      data.append("albumId", this.state.addToAlbum);
      data.append("imgIds", JSON.stringify(this.state.selectedPhotos));
      fetch('/api/album/addPhotos',
        {
          method: 'post',
          body: data,
          headers: {
            'token': localStorage.getItem('token')
          }
        })
        .then(d => d.json())
        .then(d =>
          this.setState(prevState => ({
            selectedPhotos: [],
            addToAlbum: '',
            photos: prevState.photos.map(e => Object.assign({}, e))
          }))
        );
    }else {
      alert('You must be logined')
    }
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

  handleLogOut = () => {
    localStorage.removeItem('token');
  }

  render() {
    const { photos, selectedPhotos, addToAlbum, albums } = this.state;
    // const storage = localStorage.key('token');
    return (
      <div>
        {/* {storage ? <button className='btn btn-primary logout' onClick={this.handleLogOut}>Log Out</button> : null} */}
        Filter: <Select data={albums} onChange={this.handleSelectAlbum} />
        {selectedPhotos.length ?
          <span>Add selected photo to:
            <Select data={albums} onChange={this.handleAddToAlbum} />
          </span> : ''
        }
        {addToAlbum && selectedPhotos.length ? <button className='btn btn-primary' onClick={this.handleAddPhotoToAlbum}>Send</button> : ''}
        <div className="photos-container">
          {photos.map(item =>
            <Photo
              key={item._id}
              image={item}
              onSelect={this.handlePhotoSelect}
              deleteItem={this.handleDeleteImg}
            />)}
        </div> 
      </div>
    );
  }
}

export default PhotoGrid;
