import React from 'react';

class MyContacts extends React.Component {
  render() {
    return (
      <ul>
        <li>Phone: +38 (067) 67 67 677</li>
        <li>Email: <a href="mailto:webmaster@example.com">Bogya Biluk</a></li>
        <li>Address: Sambir,I.Franko str.</li>
      </ul>
    );
  }
}

export default MyContacts;