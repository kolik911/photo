import React from 'react';

class Photo extends React.Component {

  //TODO: fix bug with checkbox

  
  handleCheck = (e) => {
    this.props.onSelect({
      id: this.props.image._id,
      checked: e.nativeEvent.target.checked
    });
  }

  delImg = (e) => {
    this.props.deleteImg(e.target.id)
  }

  render() {
    const { path, _id } = this.props.image;
    return (
      <div className="item" id={_id}>
        <button id={_id} className='btn-close' onClick={this.delImg}><i className="close-icon"></i></button>
        <label>
          <input type='checkbox' name='photos' onChange={this.handleCheck} />
          <img src={path} />
        </label>
      </div>
    );
  }

}

export default Photo;