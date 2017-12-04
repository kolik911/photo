import React from 'react';
import PhotoGrid from './components/PhotoGrid';
import CreateAlbum from '../Common/CreateAlbum';
import AddPhotos from '../Common/AddPhotos';
class ControlPanel extends React.Component {
    render() {
        return (
            <div>
                <h1>WeddingStories</h1>
                <CreateAlbum />
                <AddPhotos />
                <PhotoGrid />
            </div>
        );
    }
}

export default ControlPanel;