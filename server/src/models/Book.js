import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    year: { type: Number },
    genre: { type: String },
    notes: { type: String }
  },
  { timestamps: true }
);

export default mongoose.model('Book', bookSchema);
