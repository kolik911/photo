import React from 'react';
import AddResponse from './components/AddResponse';
import Response from './components/Response';
import './FeedBack.less';

// const checked = () => {
//   const token = localStorage.getItem('token');
//   if (!token) {
//     return false;
//   }
//   return true;
// }

class Feedback extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isToken: false,
      data: []
    }
  }

  componentDidMount() {
    fetch('/fb')
      .then(d => d.json())
      .then(d =>
        this.setState({
          data: d
        })
      )
    if (localStorage.getItem('token')) {
      const style = { display: 'block'};
      this.setState({
        isToken: true
      }); 
    }
  }

  handleDeleteItem = (id) => {
    if (localStorage.key('token')) {
			const data = new FormData();
			data.append("id", id);
			fetch('/api/fb/delete', {
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

  render() {
    const { data, isToken } = this.state;
    // const a = window.localStorage.key('token');
    return (
      <div>
        {data.map(item => <Response key={item._id} data={item} delete={this.handleDeleteItem} />)}
        <br />
        {isToken ? <AddResponse /> : null}
      </div>
    )
  }
}

export default Feedback;