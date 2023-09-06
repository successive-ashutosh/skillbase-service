const Taxonomy = require('../models/taxonomy'); // Replace with your actual model file

// Controller functions for taxonomies
const getAllTaxonomies = async (req, res) => {
  try {
    const taxonomies = await Taxonomy.find();
    res.json(taxonomies);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getTaxonomyById = async (req, res) => {
  const { id } = req.params;
  try {
    const taxonomy = await Taxonomy.findById(id);
    if (!taxonomy) {
      return res.status(404).json({ error: 'Taxonomy not found' });
    }
    res.json(taxonomy);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const createTaxonomy = async (req, res) => {
  const { name, description } = req.body;
  try {
    const taxonomy = new Taxonomy({
      name,
      description,
    });
    const savedTaxonomy = await taxonomy.save();
    res.status(201).json(savedTaxonomy);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
};

const updateTaxonomy = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  try {
    const taxonomy = await Taxonomy.findByIdAndUpdate(id, { name, description }, { new: true });
    if (!taxonomy) {
      return res.status(404).json({ error: 'Taxonomy not found' });
    }
    res.json(taxonomy);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
};

const deleteTaxonomy = async (req, res) => {
  const { id } = req.params;
  try {
    const taxonomy = await Taxonomy.findByIdAndDelete(id);
    if (!taxonomy) {
      return res.status(404).json({ error: 'Taxonomy not found' });
    }
    res.json({ message: 'Taxonomy deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllTaxonomies,
  getTaxonomyById,
  createTaxonomy,
  updateTaxonomy,
  deleteTaxonomy,
};
