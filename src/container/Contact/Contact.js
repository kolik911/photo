import React from 'react';
import MyContacts from './components/MyContacts';
import SendMessage from './components/SendMessage';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <h1>Contact</h1>
        <MyContacts /> 
        <SendMessage />
      </div>
    );
  }
}

export default Contact;