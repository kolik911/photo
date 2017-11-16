import React from 'react';

class Photo extends React.Component {

  //TODO: fix bug with checkbox

  
  handleCheck = (e) => {
    this.props.onSelect({
      id: this.props.image._id,
      checked: e.nativeEvent.target.checked
    });
  }

  render() {
    const { path, _id } = this.props.image;
    return (
      <div className="item">
        <label>
          <input type='checkbox' id={_id} name='photos' onChange={this.handleCheck} />
          <img src={path} />
        </label>
      </div>
    );
  }

}

export default Photo;