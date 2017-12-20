import React, { Component } from 'react';

class DelAlbum extends Component {


  handleId = (e) => {
    this.props.takeId(e.target.id)
  }

  render() {
    const { data } = this.props;
    return (
      <ul className='del-button'>
        {data.map(e =>
          <li key={e._id} id={e._id}> 
            <p>{e.name}</p>
            <button
              type='submit'
              id={e._id}
              className='btn btn-primary'
              onClick={this.handleId}>Delete</button>
          </li>
        )}
      </ul>
    )
  }
}


export default DelAlbum;