import React from 'react';
import PhotoGrid from './components/PhotoGrid';
import CreateAlbum from '../Common/CreateAlbum';
import AddPhotos from '../Common/AddPhotos';
import './ControlPanel.less';

class ControlPanel extends React.Component {
    render() {
        return (
            <div>
                <h1>Control Panel</h1>
                <div className='row'>
                    <div className='col-md-6'>
                        <CreateAlbum />
                    </div>
                    <div className='col-md-6'>
                        <AddPhotos />
                    </div>
                </div>
                <PhotoGrid />
            </div>
        );
    }
}

export default ControlPanel;