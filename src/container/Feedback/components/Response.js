import React, { Component } from 'react'; 

class Response extends Component{
  render(){
    const { path, desc } = this.props.user;
    return(
      <li>
        <img src={path} />
        <p>{desc}</p>
      </li>
    );
  }
}

export default Response;