import mongoose from 'mongoose';

const fallbackSchema = new mongoose.Schema({
  responses: [{ type: String, required: true }]   // e.g., ["I'm not sure, can you rephrase?"]
});

export default mongoose.model('Fallback', fallbackSchema);
