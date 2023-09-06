const SkillRatingMatrix = require('../models/skillRatingMatrix');
const logger = require('../utils/logger');

const skillRatingMatrixController = {
    
    getAllSkillRatingMatrices: async (req, res) => {
        try {
            const matrices = await SkillRatingMatrix.find();
            res.status(200).json(matrices);
        } catch (error) {
            logger.error('Error fetching skill rating matrices:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    getSkillRatingMatrixById: async (req, res) => {
        const matrixId = req.params.id;

        try {
            const matrix = await SkillRatingMatrix.findById(matrixId);
            if (!matrix) {
                return res.status(404).json({ error: 'Matrix not found' });
            }
            res.status(200).json(matrix);
        } catch (error) {
            logger.error('Error fetching skill rating matrix:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    createSkillRatingMatrix: async (req, res) => {
        const matrixData = req.body;

        try {
            const newMatrix = new SkillRatingMatrix(matrixData);
            const savedMatrix = await newMatrix.save();
            res.status(201).json(savedMatrix);
        } catch (error) {
            logger.error('Error creating skill rating matrix:', error);
            res.status(400).json({ error: 'Bad request' });
        }
    },

    updateSkillRatingMatrix: async (req, res) => {
        const matrixId = req.params.id;
        const matrixData = req.body;

        try {
            const updatedMatrix = await SkillRatingMatrix.findByIdAndUpdate(matrixId, matrixData, { new: true });
            if (!updatedMatrix) {
                return res.status(404).json({ error: 'Matrix not found' });
            }
            res.status(200).json(updatedMatrix);
        } catch (error) {
            logger.error('Error updating skill rating matrix:', error);
            res.status(400).json({ error: 'Bad request' });
        }
    },

    deleteSkillRatingMatrix: async (req, res) => {
        const matrixId = req.params.id;

        try {
            const deletedMatrix = await SkillRatingMatrix.findByIdAndDelete(matrixId);
            if (!deletedMatrix) {
                return res.status(404).json({ error: 'Matrix not found' });
            }
            res.status(200).json({ message: 'Matrix deleted successfully' });
        } catch (error) {
            logger.error('Error deleting skill rating matrix:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },
};

module.exports = skillRatingMatrixController;
