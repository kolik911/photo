import React, { Component } from 'react';

class Slide extends Component {

  render() {
    const { path } = this.props.image;
    return (
      <img src={path} />
    );
  }
}

export default Slide;

