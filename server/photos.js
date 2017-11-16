import express from 'express';
const router = express.Router();
import * as db from './utils/DBUtils';


db.setUpConnection();


router.post('/', (req, res) => {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');

  const photo = req.files.photo;
  if ( Array.isArray(photo) ){
    photo.forEach( e => {
      e.mv('./public/uploadesFiles/' + e.name, function (err) {
        if (err)
          return res.status(500).send(err);
    
        db.createImg(e).then(data => res.json({ data }));
    
      });
    })
  } else {
    photo.mv('./public/uploadesFiles/' + photo.name, function (err) {
      if (err)
        return res.status(500).send(err);
  
      db.createImg(req.files.photo).then(data => res.json({ data }));
    });
  }

})


router.get('/', (req, res) => {
  db.listImg().then(data => res.json(data));
}); 

router.get('/:id', (req,res) => {
  if (!req.params.id) return res.status(403).send(err);
  db.listImg(req.params.id).then(data => res.json(data));
})

export default router;