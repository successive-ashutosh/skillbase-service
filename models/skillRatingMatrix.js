// models/skillRatingMatrix.js
const mongoose = require('mongoose');

const skillRatingMatrixSchema = new mongoose.Schema({
    uuid: String,
    name: String,
    description: String,
    levels: [
        {
            ranking: Number,
            name: String,
            description: String
        }
    ],
    created_at: Date,
    updated_at: Date,
    created_by: mongoose.Schema.Types.ObjectId,
    updated_by: mongoose.Schema.Types.ObjectId,
}, {
    collection: 'skill_rating_matrices'
});

const SkillRatingMatrix = mongoose.model('SkillRatingMatrix', skillRatingMatrixSchema);

module.exports = SkillRatingMatrix;
