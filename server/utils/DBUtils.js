import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import '../models/Registration';
import '../models/Image';
import '../models/Album';

const Registration = mongoose.model('Registration');
const Image = mongoose.model('Image');
const Album = mongoose.model('Album');

export function setUpConnection() {
  mongoose.connect('mongodb://localhost/photo');
}

export function listUsers() {
  return Registration.find({});
}

export function authenticate(req, res) {
  Registration.findOne({
    username: req.body.username
  }, (err, user) => {
    if (err) throw err;

    if (!user) {
      res.status(401).json({ success: false, message: 'Authentication failed. User not found.' });
    } else {

      user.comparePassword(req.body.password, (err, isMatch) => {

        if (isMatch && !err) {

          const token = jwt.sign(user, process.env.SECRET_KEY);

          res.status(200).json({ success: true, token: token });

        } else {
          res.status(401).json({ success: false, message: 'Authentication failed. Passwords did not match.' });
        }
      });

    }
  });
}

export function createUser(data) {
  const registrationUser = new Registration({
    username: data.username,
    password: data.password
  });

  return registrationUser.save();
}

export function createImg(data) {
  const image = new Image({
    name: data.name,
    path: '/uploadesFiles/' + data.name
  });

  return image.save();
}

export function listImg(albumId) {
  if (!albumId) return Image.find({});
  return Image.find({ albumId });
}


export function createAlbum(data) {
  const album = new Album({
    name: data.createAlbum
  })

  return album.save();
}

export function listAlbums() {
  return Album.find({});
}

export function addImgToAlbum(albumId, imgIds) {
  return Image.update(
    { _id: { $in: JSON.parse(imgIds) } },
    { $set: { albumId } },
    { multi: true }
  )
}