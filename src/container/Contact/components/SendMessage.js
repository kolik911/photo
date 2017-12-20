import React from 'react'; 

class SendMessage extends React.Component {
  
  handleSendMessage = (e) => {
    e.preventDefault();
    fetch('/send', {
      method: 'POST',
      body: new FormData(e.target)
    })
    e.target.reset();
  }
  
  render() {
    return (
      <div>
        <form  onSubmit={this.handleSendMessage}> 
          <input className='form-control' type="text" placeholder="Name" name='name'/>
          <br/>
          <input className='form-control' type="email" placeholder="Email" name='email'/>
          <br/>
          <input className='form-control' type="text" placeholder="Phone" name='phone'/>
          <br/>
          <textarea className='form-control' placeholder="Text message" name='text'></textarea>
          <br/>
          <input className='btn btn-primary float-right' type="submit" value="Send"/>
        </form>   
      </div>
    );
  }
}

export default SendMessage;