import mongoose from 'mongoose';

const creatorSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  category: { type: String, required: true },
  tiers: [{
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    perks: [String],
    stripePriceId: String,
  }],
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
  supporters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  monthlyGoal: { type: Number },
  currentProgress: { type: Number, default: 0 },
});

export default mongoose.models.Creator || mongoose.model('Creator', creatorSchema);