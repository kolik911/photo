import jwt from 'jsonwebtoken';
 
 

export default function  (req, res) {
  const user = {
    username: 'test',
    password: 'test'
  }

  const token = jwt.sign({ user }, process.env.SECRET_KEY);

  res.json({
    success: true,
    token: token
  })
}

 