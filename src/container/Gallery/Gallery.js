import React from 'react';
import Slider from './components/Slider'; 
import './Galary.less';

class Gallery extends React.Component {
    render() {
        return (
            <div className='content'> 
                <Slider />
            </div>
        );
    }
}

export default Gallery;
