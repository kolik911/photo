import React, { Component } from 'react';

class Album extends Component {

  handleGetId = (e) => {
    this.props.click(e.target.id)
  }

  render() {
    const { image, name } = this.props.data;
    return (
      <div className="album"  onClick={this.handleGetId}>
        <img className='img-fluid' src={image} />
        <p>{name}</p> 
      </div>
    );
  }
}

export default Album;