const express = require('express');
const router = express.Router();
const skillController = require('../controllers/skillController'); 

/**
 * @swagger
 * tags:
 *   name: Skills
 *   description: API endpoints for managing skills
 * 
 * components:
 *   schemas:
 *     Skill:
 *       type: object
 *       properties:
 *         uuid:
 *           type: string
 *         name:
 *           type: string
 *         description:
 *           type: string
 *         category:
 *           type: string
 *         taxonomy:
 *           type: object
 *           properties:
 *             id:
 *               type: string
 *             name:
 *               type: string
 *         versions:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               uuid:
 *                 type: string
 *               name:
 *                 type: string
 *               weightage:
 *                 type: number
 *         default_version:
 *           type: object
 *           properties:
 *             uuid:
 *               type: string
 *             name:
 *               type: string
 *             weightage:
 *               type: number
 *         matrix:
 *           type: string
 *         interviewers:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               uuid:
 *                 type: string
 *               name:
 *                 type: string
 *         user_count:
 *           type: object
 *           properties:
 *             "1":
 *               type: number
 *             "2":
 *               type: number
 *             "3":
 *               type: number
 *             "4":
 *               type: number
 *             "5":
 *               type: number
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
 * /api/skills:
 *   get:
 *     summary: Get all skills
 *     description: Retrieve a list of all skills
 *     tags: [Skills]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Skill'
 *       500:
 *         description: Internal server error
 * 
 * /api/skills/{id}:
 *   get:
 *     summary: Get a skill by ID
 *     description: Retrieve a skill by its ID
 *     tags: [Skills]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the skill
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Skill'
 *       404:
 *         description: Skill not found
 *       500:
 *         description: Internal server error
 * 
 *   post:
 *     summary: Create a new skill
 *     description: Create a new skill
 *     tags: [Skills]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Skill'
 *     responses:
 *       201:
 *         description: Skill created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Skill'
 *       400:
 *         description: Invalid request
 *       500:
 *         description: Internal server error
 * 
 *   put:
 *     summary: Update a skill
 *     description: Update a skill by its ID
 *     tags: [Skills]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the skill
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Skill'
 *     responses:
 *       200:
 *         description: Skill updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Skill'
 *       400:
 *         description: Invalid request or skill ID
 *       404:
 *         description: Skill not found
 *       500:
 *         description: Internal server error
 * 
 *   delete:
 *     summary: Delete a skill
 *     description: Delete a skill by its ID
 *     tags: [Skills]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the skill
 *     responses:
 *       200:
 *         description: Skill deleted successfully
 *       404:
 *         description: Skill not found
 *       500:
 *         description: Internal server error
 * 
 */
router.get('/', skillController.getAllSkills);
router.get('/:id', skillController.getSkillById);
router.post('/', skillController.createSkill);
router.put('/:id', skillController.updateSkill);
router.delete('/:id', skillController.deleteSkill);

module.exports = router;
