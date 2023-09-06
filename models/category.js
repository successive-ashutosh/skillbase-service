const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  uuid: String,
  name: String,
  description: String,
  taxonomies_uuid: mongoose.Schema.Types.ObjectId,
  skill_count: Number,
  matrix_uuid: mongoose.Schema.Types.ObjectId,
  created_at: Date,
  updated_at: Date,
  created_by: mongoose.Schema.Types.ObjectId,
  updated_by: mongoose.Schema.Types.ObjectId,
}, {
  collection: 'categories' // Specify the collection name
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
