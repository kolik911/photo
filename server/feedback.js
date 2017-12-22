import express from 'express';
const router = express.Router();
import * as db from './utils/DBUtils';

// router.post('/', (req, res) => {
//   if (!req.files)
//     return res.status(400).send('No files were uploaded.');

//   const response = req.files.path;

//   response.mv('./public/some/' + response.name, function (err) {
//     if (err)
//       return res.status(500).send(err);
      
//     db.CreateFeedBack(req.files.path, req.body).then(data => res.json({ data }));
//   }); 
// })

router.get('/', (req, res) => {
  db.listFeedBack().then(data => res.json(data));
})
 
// router.post('/delete', (req, res) => {
//   db.deleteResponse(req.body).then(data => res.json(data));
// });

export default router;