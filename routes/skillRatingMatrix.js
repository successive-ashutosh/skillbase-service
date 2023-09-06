const express = require('express');
const router = express.Router();
const skillRatingMatrixController = require('../controllers/skillRatingMatrixController');

/**
 * @swagger
 * tags:
 *   name: Skill Rating Matrices
 *   description: API endpoints for managing skill rating matrices
 * components:
 *   schemas:
 *     SkillRatingMatrix:
 *       type: object
 *       properties:
 *         uuid:
 *           type: string
 *         name:
 *           type: string
 *         description:
 *           type: string
 *         levels:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/SkillRatingLevel'
 *         created_at:
 *           type: string
 *           format: date-time
 *         updated_at:
 *           type: string
 *           format: date-time
 *         created_by:
 *           type: string
 *         updated_by:
 *           type: string
 * 
 *     SkillRatingLevel:
 *       type: object
 *       properties:
 *         ranking:
 *           type: number
 *         name:
 *           type: string
 *         description:
 *           type: string
 * 
 * /api/skill-rating-matrices:
 *   get:
 *     summary: Get all skill rating matrices
 *     description: Retrieve a list of all skill rating matrices
 *     tags: [Skill Rating Matrices]
 *     responses:
 *       200:
 *         description: Successful response
 *       500:
 *         description: Internal server error
 */
router.get('/api/skill-rating-matrices', skillRatingMatrixController.getAllSkillRatingMatrices);

/**
 * @swagger
 * /api/skill-rating-matrices/{id}:
 *   get:
 *     summary: Get a skill rating matrix by ID
 *     description: Retrieve a skill rating matrix by its ID
 *     tags: [Skill Rating Matrices]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the skill rating matrix
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: Skill rating matrix not found
 *       500:
 *         description: Internal server error
 */
router.get('/api/skill-rating-matrices/:id', skillRatingMatrixController.getSkillRatingMatrixById);

/**
 * @swagger
 * /api/skill-rating-matrices:
 *   post:
 *     summary: Create a new skill rating matrix
 *     description: Create a new skill rating matrix
 *     tags: [Skill Rating Matrices]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SkillRatingMatrix'
 *     responses:
 *       201:
 *         description: Skill rating matrix created successfully
 *       400:
 *         description: Invalid request
 *       500:
 *         description: Internal server error
 */
router.post('/api/skill-rating-matrices', skillRatingMatrixController.createSkillRatingMatrix);

/**
 * @swagger
 * /api/skill-rating-matrices/{id}:
 *   put:
 *     summary: Update a skill rating matrix
 *     description: Update a skill rating matrix by its ID
 *     tags: [Skill Rating Matrices]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the skill rating matrix
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SkillRatingMatrix'
 *     responses:
 *       200:
 *         description: Skill rating matrix updated successfully
 *       400:
 *         description: Invalid request or skill rating matrix ID
 *       404:
 *         description: Skill rating matrix not found
 *       500:
 *         description: Internal server error
 */
router.put('/api/skill-rating-matrices/:id', skillRatingMatrixController.updateSkillRatingMatrix);

/**
 * @swagger
 * /api/skill-rating-matrices/{id}:
 *   delete:
 *     summary: Delete a skill rating matrix
 *     description: Delete a skill rating matrix by its ID
 *     tags: [Skill Rating Matrices]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the skill rating matrix
 *     responses:
 *       200:
 *         description: Skill rating matrix deleted successfully
 *       404:
 *         description: Skill rating matrix not found
 *       500:
 *         description: Internal server error
 */
router.delete('/api/skill-rating-matrices/:id', skillRatingMatrixController.deleteSkillRatingMatrix);

module.exports = router;
