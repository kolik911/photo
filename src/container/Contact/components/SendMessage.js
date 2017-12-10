import React from 'react'; 

class SendMessage extends React.Component {
  render() {
    return (
      <div>
        <form method='post' action='/send'> 
          <input className='form-control' type="text" placeholder="Name" name='name'/>
          <br/>
          <input className='form-control' type="email" placeholder="Email" name='email'/>
          <br/>
          <input className='form-control' type="text" placeholder="Phone" name='phone'/>
          <br/>
          <textarea className='form-control' placeholder="Text message" name='text'></textarea>
          <br/>
          <input className='btn btn-primary' type="submit" value="Send"/>
        </form>   
      </div>
    );
  }
}

export default SendMessage;