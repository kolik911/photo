import express from 'express';
import jwt from 'jsonwebtoken';
import * as db from './utils/DBUtils.js'; 

db.setUpConnection();
const router = express.Router();


router.post('/registration', (req, res) => {
    db.createUser(req.body).then(data => res.send(data)) 
});


router.post('/authenicate', db.authenticate);


router.use((req, res, next) => {

    const token = req.body.token || req.query.token || req.headers['token'];

    if (token) {
        
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                req.decoded = decoded;
                next();
            }
        });

    } else {

        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }
});


router.get('/list-users', (req, res) => {
    db.listUsers().then(data => res.send(data));
});

export default router;

 












// router.post('/authenicate', (req, res) => {
    //     const user = req.body;
    //     db.authenticate(user).then(user => {
    //         console.log(username)
    //         if (!user) {
    //             res.json({
    //                 secces: false,
    //                 message: 'Authentication failed. User not found.'
    //             });
    //         } else if (user) {
    //             if (user.password != req.body.password) {
    //                 res.json({
    //                     success: false,
    //                     message: 'Authentication failed. Wrong password.'
    //                 });
    //             } else {
    //                 const payload = {
    //                     admin: user.admin
    //                 };
    
    //                 var token = jwt.sign(payload, process.env.SECRET_KEY);
    
    //                 res.json({
    //                     success: true,
    //                     message: 'Enjoy your token!',
    //                     token: token
    //                 });
    //             }
    //         }
    //     })
    // });