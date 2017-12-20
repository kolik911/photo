import React from 'react';
import PhotoGrid from './components/PhotoGrid';
import CreateAlbum from '../Common/CreateAlbum';
import AddPhotos from '../Common/AddPhotos';
import DelAlbum from '../Common/DelAlbum';
import './ControlPanel.less';

class ControlPanel extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			albums: []
		}
	}

	handleDeleteAlbumById = (id) => {
		if (localStorage.key('token')) {
			const data = new FormData();
			data.append("id", id);
			fetch('/api/album/delete', {
				method: 'POST',
				body: data,
				headers: {
					'token': localStorage.getItem('token')
				}
			})
			document.getElementById(id).remove();
		} else {
			alert('You must be logined');
		}
	}

	componentDidMount() {
		fetch('/album/list')
			.then(d => d.json())
			.then(d =>
				this.setState({
					albums: d
				})
			);
	}

	render() {
		const { albums } = this.state;
		return (
			<div className='row'>
				<div className='col-md-9'>
					<AddPhotos />
					<PhotoGrid />
				</div>

				<div className='col-md-3'>
					<div className='col-sm-12'>
						<CreateAlbum />
						<DelAlbum data={albums} takeId={this.handleDeleteAlbumById} />
					</div>
				</div>
			</div>
		);
	}
}

export default ControlPanel;