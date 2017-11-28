import React, { Component } from 'react';
import Albums from './components/Albums'; 

class AlbumsRender extends Component {
  render() {
    return (
      <div className="albums-list">
        <Albums />
      </div>
    );
  }
}

export default AlbumsRender;