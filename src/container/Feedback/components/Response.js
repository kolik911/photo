import React, { Component } from 'react';

class Response extends Component {

  constructor(props){
    super(props);
    this.state={
      isToken: false
    }
  }

  delItem = (e) => {
    this.props.delete(e.target.id)
  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.setState({
        isToken: true
      })
    }
  }

  render() {
    const { isToken } = this.state;
    const { description, path, _id } = this.props.data; 
    return (
      <div className='response' id={_id}>
        <div className='col-md-12'>
          <div className='row'>
            <div className='col-sm-3'>
              {isToken ? <button onClick={this.delItem} className='btn-close' id={_id}></button> : null}
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