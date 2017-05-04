import mongoose, { Schema } from 'mongoose';
import bcrypt from 'mongoose-bcrypt';

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    bycrypt: true,
  },
  authToken: {
    type: String,
  },
}, {
  timestamps: true,
});

userSchema.plugin(bcrypt);

userSchema.pre('save', (next) => {
  next();
});

export default mongoose.model('User', userSchema);
