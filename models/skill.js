const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  uuid: String,
  name: String,
  description: String,
  category: mongoose.Schema.Types.ObjectId,
  taxonomy: {
    id: mongoose.Schema.Types.ObjectId,
    name: String,
  },
  versions: [
    {
      uuid: String,
      name: String,
      weightage: Number,
    },
  ],
  default_version: {
    uuid: String,
    name: String,
    weightage: Number,
  },
  matrix: mongoose.Schema.Types.ObjectId,
  interviewers: [
    {
      uuid: String,
      name: String,
    },
  ],
  user_count: {
    1: Number,
    2: Number,
    3: Number,
    4: Number,
    5: Number,
  },
  created_at: Date,
  updated_at: Date,
  created_by: mongoose.Schema.Types.ObjectId,
  updated_by: mongoose.Schema.Types.ObjectId,
}, {
  collection: 'skills' // Specify the collection name
});

const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;
