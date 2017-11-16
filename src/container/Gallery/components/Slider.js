import React from 'react';
import Slide from './Slide';
import data from '../data.json';

class Slider extends React.Component {

  constructor(props) {
    super(props);
  }

  handleLeftNav = (e) => {
    console.log (this)
  }

  handleRightNav = (e) => {
    console.log(this)
  }



  // renderSliders() {
  //   return data.map(el => {
  //     return (
  //       <Slide
  //         name={el.name}
  //         key={el.abbreviation}
  //       />
  //     );
  //   })
  // }

  render() { 
    return (
      <div className='carousel-continer'>
        <button 
          className="nav-left"
          onClick={this.handleLeftNav}
        >&#60;</button>

        <div className='carousel-viewport'>
          {/* {this.renderSliders()} */}
        </div>

        <button 
          className='nav-right'
          onClick={this.handleRightNav}
        >&#62;</button>
      </div>
    );
  }
}

export default Slider;
