import React, { Component } from 'react';

class Response extends Component {


  delItem = (e) => {
    this.props.delete(e.target.id)
  }

  render() {
    const { description, path, _id } = this.props.data;
    return (
      <div className='response'>
        <div className='col-md-12'>
          <div className='row'>
            <div className='col-sm-3'>
              <button onClick={this.delItem} id={_id}>x</button>
              <img src={path} className='img-fluid' />
            </div>
            <div className='col-sm-9'>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Response;