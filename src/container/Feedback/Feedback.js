import React from 'react';
import AddResponse from './components/AddResponse';
import Response from './components/Response';
import './FeedBack.less';


// function fetchAoo() {
//   return (
//     <form>
//       <input type='file' name='path' className='add-response-file' />
//       <textarea name="description" className='form-control' rows="6" ></textarea>
//       <br />
//       <input type='submit' className='btn btn-primary' />
//     </form>
//   )
// }

class Feedback extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
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
    // if (localStorage.getItem('token')) {
    //   fetchAoo()
    // } else {
    //   console.log('2');
    // }
  } 

  handleDeleteItem = (id) => {
    // fetch('/fb/delete', {
    //   method: 'POST',
    //   body: id
    // })
    console.log(id)

  }

  render() {
    const { data } = this.state;
    // const a = window.localStorage.key('token');
    return (
      <div>
        {data.map(item => <Response key={item._id} data={item} delete={this.handleDeleteItem} />)}
        <br />
      </div>
    )
  }
}

export default Feedback;