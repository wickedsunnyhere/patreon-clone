import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String },
  isCreator: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  bio: { type: String },
  socialLinks: {
    twitter: String,
    instagram: String,
    youtube: String,
    website: String,
  },
});

export default mongoose.models.User || mongoose.model('User', userSchema);