import React, { Component } from 'react';
import AlbumsGrid from './components/AlbumsGrid'; 

class WeddingStories extends Component {
  render() {
    return (
      <div className="albums-list">
        <AlbumsGrid />
      </div>
    );
  }
}

export default WeddingStories;