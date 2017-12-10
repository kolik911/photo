import React, { Component } from 'react';

class DelAlbum extends Component {


  handleId = (e) => {
    this.props.takeId(e.target.id)
  }

  render() {
    const { data } = this.props;
    return (
      <ul>
        {data.map(e =>
          <li key={e._id} id={e._id}>
            {e.name}
            <button
              type='submit'
              id={e._id}
              onClick={this.handleId}>Delete</button>
          </li>
        )}
      </ul>
    )
  }
}


export default DelAlbum;