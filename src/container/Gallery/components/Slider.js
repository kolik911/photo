import React from 'react';
import Slide from './Slide';
import Slick from 'react-slick';

function LeftArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className='arrow-btn-left'
      onClick={onClick}
    >&#60;</div>
  );
}

function RightArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className='arrow-btn-right'
      onClick={onClick}
    >&#62;</div>
  );
}

class Slider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      photos: []
    }
  }

  componentDidMount() {
    fetch('/photos/5a2ad877891f810aecfdddc0')
      .then(d => d.json())
      .then(d =>
        this.setState({
          photos: d
        })
      );
  }

  render() {
    const { photos } = this.state;
    const settings = { 
      infinite: true,
      speed: 900,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <LeftArrow />, 
      nextArrow: <RightArrow />,
      variableWidth: true
    };
    return (
      <Slick {...settings}>
        {photos.map(item => <div className="slide-item" key={item._id}><Slide key={item._id} image={item} /></div>)}
      </Slick>
    );
  }
}

export default Slider;