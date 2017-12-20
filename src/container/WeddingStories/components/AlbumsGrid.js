import React, { Component } from 'react';
import Album from './Album';
import Route from 'react-router-dom/Route';
import Link from 'react-router-dom/Link';
import Masonry from 'react-masonry-component'; 

class AlbumsGrid extends Component {

  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      photos: []
    }
  }

  handleChooseAlbumById = (id) => {
    const obj = id;
    fetch('/photos/' + obj.id)
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
    const masonryOptions = {
      itemSelector: '.Photo',
      columnWidth: 540,
      gutter: 20
    }
    return (
      <div className='albums'>
        <Route exact={true} path="/wedding-stories" render={() => (
          <div className='row'>
            {albums.map(item => <div className='col-md-4' key={item._id}><Link to={`/wedding-stories/${item._id}`}><Album data={item} click={this.handleChooseAlbumById} /></Link></div>)}
          </div>
        )} />
        <Route path="/wedding-stories/:itemId" render={() => (
          <Masonry
            options={masonryOptions} 
          >
            {photos.map(item =>
              <img src={item.path} key={item._id} className='Photo img-fluid' />
            )}
          </Masonry>
        )} />
      </div>
    );
  }
}
export default AlbumsGrid;