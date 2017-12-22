import React from 'react'; 

class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }

  click = () => {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }
  
  //TODO: fix bug with checkbox


  handleCheck = (e) => {
    this.props.onSelect({
      id: this.props.image._id,
      checked: e.nativeEvent.target.checked
    });
  }

  delItem = (e) => {
    this.props.deleteItem(e.target.id)
  }


  render() {
    const { path, _id } = this.props.image; 
    return (
      <div className="item" id={_id}>
        <button id={_id} className='btn-close' onClick={this.delItem}></button>
        <label>
          <input type='checkbox' name='photos' onChange={this.handleCheck} />
          <img src={path} onClick={this.click} className={this.state.active ? 'checked' : null}  />
        </label>
      </div>
    );
  }

}

export default Photo;
