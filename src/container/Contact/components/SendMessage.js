import React from 'react'; 

class SendMessage extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Name"/>
          <br/>
          <input type="text" placeholder="Email"/>
          <br/>
          <input type="text" placeholder="Phone"/>
          <br/>
          <textarea placeholder="Text message"></textarea>
          <br/>
          <input type="submit" value="Send"/>
        </form>   
      </div>
    );
  }
}

export default SendMessage;