import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
  name: { type: String },
  image: {type: String}
});

const Album = mongoose.model('Album', AlbumSchema);