import React, { Component } from 'react';
import AlbumsGrid from './components/AlbumsGrid'; 
import './WeddingStories.less';

class WeddingStories extends Component {
  render() {
    return (
      <div className="container">
        <AlbumsGrid />
      </div>
    );
  }
}

export default WeddingStories;