import React, { Component } from 'react';

class Albums extends Component {

  constructor(props) {
    super(props);
    this.state = {
      albums: []
    }
  }

  componentDidMount() {
    fetch('/album/list')
      .then(d => d.json())
      .then(d =>
        this.setState({
          albums: d
        })
      );
  }

  render() {
    const { albums } = this.state;
    return (
      <div>
        <ul className='albums-list'>
          {albums.map(item => <li>{item.name}</li>)}
        </ul>
      </div>
    );
  }
}

export default Albums;