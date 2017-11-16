import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const LoginSchema = new Schema({
  username: String,
  password: String
}); 

const Login = mongoose.model( 'Login', LoginSchema);