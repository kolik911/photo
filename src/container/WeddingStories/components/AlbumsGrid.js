import React, { Component } from 'react';
import Album from './Album';
import Route from 'react-router-dom/Route';
import Link from 'react-router-dom/Link';

class AlbumsGrid extends Component {

  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      photos: []
    }
  }

  handleChooseAlbumById = (id) => {
    fetch('/photos/' + id)
      .then(d => d.json())
      .then(d =>
        this.setState({
          photos: d
        })
      );
  }

  componentDidMount() {
    fetch('/album/list')
      .then(d => d.json())
      .then(d =>
        this.setState({
          albums: d
        })
      );
  }

  render() {
    const { albums, photos } = this.state;
    return (
      <div className='albums'>
        <Route exact={true} path="/wedding-stories" render={() => (
          <div className='row'>
            {albums.map(item => <div className='col-md-4' key={item._id}><Link to={`/wedding-stories/${item._id}`}><Album data={item} click={this.handleChooseAlbumById} /></Link></div>)}
          </div>
        )} />
        <Route path="/wedding-stories/:itemId" render={() => (
          <div>
            {photos.map(item => <div key={item._id}> <img src={item.path} className='img-fluid' /></div> )}
          </div>
        )} />
      </div> 
    );
  }
}
export default AlbumsGrid;