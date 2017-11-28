import React, { Component } from 'react';
import Album from './Album';


class Albums extends Component {

  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      photos: []
    }
  }

  handleGOToAlbum = (e) => {
    console.log(e.target)
  }

  componentDidMount() {
    fetch('/album/list')
      .then(d => d.json())
      .then(d =>
        this.setState({
          albums: d
        })
      );
    fetch('/photos')
      .then(d => d.json())
      .then(d =>
        this.setState({
          photos: d
        })
      );
  }

  render() {
    const { albums } = this.state;
    return (
      <ul onClick={this.handleGOToAlbum}>
        {albums.map(item => <li key={item._id}><Album data={item} /></li>)}
      </ul>
    );
  }
}

export default Albums;