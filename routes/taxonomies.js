const express = require('express');
const router = express.Router();
const taxonomyController = require('../controllers/taxonomyController'); // Replace with your actual controller file

/**
 * @swagger
 * tags:
 *   name: Taxonomies
 *   description: API endpoints for managing taxonomies
 * 
 * components:
 *   schemas:
 *     Taxonomy:
 *       type: object
 *       properties:
 *         uuid:
 *           type: string
 *         name:
 *           type: string
 *         description:
 *           type: string
 *         category_count:
 *           type: number
 *         skill_count:
 *           type: number
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
 * /api/taxonomies:
 *   get:
 *     summary: Get all taxonomies
 *     description: Retrieve a list of all taxonomies
 *     tags: [Taxonomies]  
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Taxonomy'
 *       500:
 *         description: Internal server error
 * 
 * /api/taxonomies/{id}:
 *   get:
 *     summary: Get a taxonomy by ID
 *     description: Retrieve a taxonomy by its ID
 *     tags: [Taxonomies]   
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the taxonomy
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Taxonomy'
 *       404:
 *         description: Taxonomy not found
 *       500:
 *         description: Internal server error
 * 
 *   post:
 *     summary: Create a new taxonomy
 *     description: Create a new taxonomy
 *     tags: [Taxonomies]  
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Taxonomy'
 *     responses:
 *       201:
 *         description: Taxonomy created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Taxonomy'
 *       400:
 *         description: Invalid request
 *       500:
 *         description: Internal server error
 * 
 *   put:
 *     summary: Update a taxonomy
 *     description: Update a taxonomy by its ID
 *     tags: [Taxonomies]  
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the taxonomy
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Taxonomy'
 *     responses:
 *       200:
 *         description: Taxonomy updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Taxonomy'
 *       400:
 *         description: Invalid request or taxonomy ID
 *       404:
 *         description: Taxonomy not found
 *       500:
 *         description: Internal server error
 * 
 *   delete:
 *     summary: Delete a taxonomy
 *     description: Delete a taxonomy by its ID
 *     tags: [Taxonomies]  
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the taxonomy
 *     responses:
 *       200:
 *         description: Taxonomy deleted successfully
 *       404:
 *         description: Taxonomy not found
 *       500:
 *         description: Internal server error
 * 
 */
router.get('/', taxonomyController.getAllTaxonomies);
router.get('/:id', taxonomyController.getTaxonomyById);
router.post('/', taxonomyController.createTaxonomy);
router.put('/:id', taxonomyController.updateTaxonomy);
router.delete('/:id', taxonomyController.deleteTaxonomy);

module.exports = router;
