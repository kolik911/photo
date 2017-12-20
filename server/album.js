import express from 'express';
import * as db from './utils/DBUtils';
import { read } from 'fs';
const router = express.Router();

// router.post('/', (req, res) => {
//   db.createAlbum(req.body).then(data => res.json(data));
// });

router.get('/list',(req,res) => {
  db.listAlbums().then(data => res.json(data));
})

// router.post('/delete', db.deleteAlbum);

// router.post('/addPhotos', (req, res) => {
//   db.addImgToAlbum(req.body.albumId, req.body.imgIds).then(data => res.json(data), err => console.log(err)); 
// })



export default router;