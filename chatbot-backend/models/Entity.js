import mongoose from 'mongoose';

const entitySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }, // e.g., "technology"
  values: [
    {
      name: { type: String, required: true },           // e.g., "React"
      synonyms: [{ type: String }]                      // e.g., ["reactjs", "react.js"]
    }
  ]
});

export default mongoose.model('Entity', entitySchema);
