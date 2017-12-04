import React, { Component } from 'react';

class Album extends Component {

  handleGetId = () => {
    this.props.click({
      id: this.props.data._id
    })
  }

  render() {
    const { image, name } = this.props.data;
    return (
      <div className="album"  onClick={this.handleGetId}>
        <img src={image} />
        <p>{name}</p> 
      </div>
    );
  }
}

export default Album;