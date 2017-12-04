import express from 'express';
import nodemailer from 'nodemailer';
const router = express.Router();

router.post('/', (req, res) => {
  const output = `
    <p>New message for you</p>
    <ul> 
      <li>Name: ${req.body.name}</li>
      <li>Name: ${req.body.email}</li>
      <li>Phone: ${req.body.phone}</li>      
    </ul>
    <p>Text from user: ${req.body.text}</p>
  `; 
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'petro.vaskiv.lviv@gmail.com',
      pass: '123456789qqq'
    },
    tls: {
      rejectUnauthorized: false
    }
  });


  let mailOptions = {
    from: '<foo@blurdybloop.com>',
    to: 'kolia.kachmaruk@gmail.com',
    subject: 'Node',
    text: 'Hello world?',
    html: output
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  });
  res.json(req.body)
});

export default router;