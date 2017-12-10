import React, { Component } from 'react';

class Selector extends Component {

  handleChange = (e) => {
    this.props.onChange(e.target.value)
  }


  render() {
    const { data } = this.props;
    return (
      <select className='custom-select' onChange={this.handleChange} >
        <option value=''>...</option>
        {data.map((e) => <option key={e._id} value={e._id}>{e.name}</option>)}
      </select>
    );
  }
}

export default Selector;