import React from 'react';
import MyContacts from './components/MyContacts';
import SendMessage from './components/SendMessage';
import './Contact.less';

class Contact extends React.Component {
  render() {
    return (
      <div className='container contact'>
        <div className='row'>
          <div className='col-md-6'>
            <img className='my-photo' src={require('../../_/img/b.jpg')} />
            <span>
              Lorem Ipsum - це текст-"риба",
              що використовується в друкарстві та дизайні.
              Lorem Ipsum є, фактично, стандартною "рибою" аж з XVI сторіччя,
              коли невідомий друкар взяв шрифтову гранку та склав на ній
              підбірку зразків шрифтів. "Риба" не тільки успішно пережила
              п'ять століть, але й прижилася в електронному верстуванні,
              залишаючись по суті незмінною. Вона популяризувалась в 60-их роках
              минулого сторіччя завдяки виданню зразків шрифтів Letraset, які
              містили уривки з Lorem Ipsum, і вдруге - нещодавно завдяки
              програмам комп'ютерного верстування на кшталт Aldus Pagemaker,
              які використовували різні версії Lorem Ipsum.
          </span>
          </div>
          <div className='col-md-6'>
            <h4>My contact</h4>
            <MyContacts />
            <h4>Send me message</h4>
            <SendMessage />
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;