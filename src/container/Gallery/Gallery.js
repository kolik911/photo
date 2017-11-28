import React from 'react';
import Slider from './components/Slider'; 

class Gallery extends React.Component {
    render() {
        return (
            <div className='content'>
                <h1>Gallery</h1>
                <Slider />
            </div>
        );
    }
}

export default Gallery;
