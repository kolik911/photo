import React, { Component } from 'react';

class Album extends Component {

  handleGetId = (e) => {
    this.props.click({
      id: this.props.data._id
    })
  }

  render() {
    const { image, name, _id } = this.props.data;
    return (
      <div className="album" id={_id} onClick={this.handleGetId}>
        <img className='img-fluid' src={image} />
        <p>{name}</p>
      </div>
    );
  }
}

export default Album;