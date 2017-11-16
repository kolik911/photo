import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
  name: { type: String },
  path: { type: String },
  albumId : { type: String, default: null}
});

const Image = mongoose.model('Image', PhotoSchema );