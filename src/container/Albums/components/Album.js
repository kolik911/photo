import React, { Component } from 'react';

class Album extends Component {


  render() {
    const { image, name } = this.props.data;
    return (
      <div className="album">
        <img src={image} />
        <p>{name}</p> 
      </div>
    );
  }
}

export default Album;