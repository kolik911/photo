import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const FeedBackSchema = new Schema({
  description : { type: String },
  path: { type: String}
})

const FeedBack = mongoose.model('FeedBack', FeedBackSchema);