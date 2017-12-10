import React from 'react';
import MyContacts from './components/MyContacts';
import SendMessage from './components/SendMessage';
import './Contact.less';

class Contact extends React.Component {
  render() {
    return (
      <div className='col-md-6'>
        <h1>Contact</h1>
        <MyContacts /> 
        <SendMessage />
      </div>
    );
  }
}

export default Contact;