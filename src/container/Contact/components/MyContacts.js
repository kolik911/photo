import React from 'react';

class MyContacts extends React.Component {
  render() {
    return (
      <ul>
        <li>Phone: +38 (067) 67 67 677</li>
        <li>Email: <strong><a href="mailto:webmaster@example.com" className='my-mail'>Bogya Biluk</a></strong></li>
        <li>Address: Sambir,I.Franko str.</li>
      </ul>
    );
  }
}

export default MyContacts;