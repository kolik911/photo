import React, { Component } from 'react';
import Album from './Album';
import Route from 'react-router-dom/Route';
import Link from 'react-router-dom/Link';

class Albums extends Component {

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
    return (
      // <Router  history={browserHistory}>
        <div>
          <Route exact={true} path="/albums" render={() => (
            <ul>
              {albums.map(item => <li key={item._id}><Link to={`/albums/${item._id}`}><Album data={item} click={this.handleChooseAlbumById} /></Link></li>)}
            </ul>
          )} />
          <Route path="/albums/:itemId" render={() => (
            <div className="albums-grid">
              {photos.map(item => <img key={item._id} src={item.path}/>)}
            </div>
          )} />
        </div>
      // </Router>
    );
  }
}
export default Albums;