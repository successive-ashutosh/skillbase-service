const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController'); 

/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: API endpoints for managing categories
 * 
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       properties:
 *         uuid:
 *           type: string
 *         name:
 *           type: string
 *         description:
 *           type: string
 *         taxonomies_uuid:
 *           type: string
 *         skill_count:
 *           type: integer
 *         matrix_uuid:
 *           type: string
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
 * /api/categories:
 *   get:
 *     summary: Get all categories
 *     description: Retrieve a list of all categories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: Successful response
 *       500:
 *         description: Internal server error
 * 
 * /api/categories/{id}:
 *   get:
 *     summary: Get a category by ID
 *     description: Retrieve a category by its ID
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Category ID
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: Category not found
 *       500:
 *         description: Internal server error
 * 
 *   post:
 *     summary: Create a new category
 *     description: Create a new category
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       201:
 *         description: Category created successfully
 *       400:
 *         description: Invalid request
 *       500:
 *         description: Internal server error
 * 
 *   put:
 *     summary: Update a category
 *     description: Update a category by its ID
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Category ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: Category updated successfully
 *       400:
 *         description: Invalid request or category ID
 *       404:
 *         description: Category not found
 *       500:
 *         description: Internal server error
 * 
 *   delete:
 *     summary: Delete a category
 *     description: Delete a category by its ID
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Category ID
 *     responses:
 *       200:
 *         description: Category deleted successfully
 *       404:
 *         description: Category not found
 *       500:
 *         description: Internal server error
 */
router.get('/', categoryController.getAllCategories);
router.get('/:id', categoryController.getCategoryById);
router.post('/', categoryController.createCategory);
router.put('/:id', categoryController.updateCategory);
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;
