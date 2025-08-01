import mongoose from 'mongoose';

const intentSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }, // e.g., "greeting"
  trainingPhrases: [{ type: String, required: true }],  // e.g., ["hi", "hello there"]
  responses: [{ type: String, required: true }],        // e.g., ["Hey!", "Hi there!"]
  contextRequired: { type: Boolean, default: false },    // Whether intent needs context
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Intent', intentSchema);
