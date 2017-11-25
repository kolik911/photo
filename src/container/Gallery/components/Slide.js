import React, { Component } from 'react';

class Slide extends Component {

  render() {
    const { path } = this.props.image;
    return (
      // <div>
        <img src={path} />
      // </div>
    );
  }
}

export default Slide;

