import React from 'react';
import './Footer.less';

class Footer extends React.Component {
  render() {
    return (
      <ul className='social-footer'>
        <li><a href="#"><i className="fa fa-facebook-square fa-3" aria-hidden="true"></i></a></li>
        <li><a href="#"><i className="fa fa-youtube-square fa-3" aria-hidden="true"></i></a></li>
        <li><a href="#"><i className="fa fa-instagram fa-3" aria-hidden="true"></i></a></li>
        <li><a href="#"><i className="fa fa-vk fa-3" aria-hidden="true"></i></a></li>
      </ul>
    );
  }
}

export default Footer;