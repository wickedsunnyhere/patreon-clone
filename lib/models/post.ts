import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  creatorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Creator', required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  tierAccess: { type: String, required: true }, // 'public' or tier ID
  createdAt: { type: Date, default: Date.now },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  comments: [{
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content: String,
    createdAt: { type: Date, default: Date.now },
  }],
});

export default mongoose.models.Post || mongoose.model('Post', postSchema);