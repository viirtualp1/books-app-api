import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
  id: Number,
  author: String,
  name: String,
  description: String,
  source: String,
  image: String,
  state: Object,
  page: Number,
  last_page: Number,
  genre: String,
  chapter: Object,
  quotes: Array,
  notes: Array
});
