const mongoose = require('mongoose');

const taxonomySchema = new mongoose.Schema({
  uuid: String,
  name: String,
  description: String,
  category_count: Number,
  skill_count: Number,
  created_at: Date,
  updated_at: Date,
  created_by: mongoose.Schema.Types.ObjectId,
  updated_by: mongoose.Schema.Types.ObjectId,
}, {
  collection: 'taxonomies' // Specify the collection name
});

const Taxonomy = mongoose.model('Taxonomy', taxonomySchema);

module.exports = Taxonomy;
