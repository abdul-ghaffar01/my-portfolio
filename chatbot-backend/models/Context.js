import mongoose from 'mongoose';

const contextSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  activeContext: { type: String },          // e.g., "project_discussion"
  expiresAt: { type: Date }                 // Auto-expire after X minutes
});

export default mongoose.model('Context', contextSchema);
