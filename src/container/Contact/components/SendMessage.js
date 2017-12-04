import React from 'react'; 

class SendMessage extends React.Component {
  render() {
    return (
      <div>
        <form method='post' action='/send'> 
          <input type="text" placeholder="Name" name='name'/>
          <br/>
          <input type="email" placeholder="Email" name='email'/>
          <br/>
          <input type="text" placeholder="Phone" name='phone'/>
          <br/>
          <textarea placeholder="Text message" name='text'></textarea>
          <br/>
          <input type="submit" value="Send"/>
        </form>   
      </div>
    );
  }
}

export default SendMessage;