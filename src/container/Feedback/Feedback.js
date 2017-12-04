import React from 'react';
import Response from './components/Response';

class Feedback extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          path: 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg',
          desc: 'aaa'
        }
      ]
    }
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <h1>Feedback</h1> 
        {data.map((item, i) => <Response key={i} user={item}/> )}  
      </div>
    );
  }
}

export default Feedback;