const mongoose = require('mongoose');
const config = require('../config/config');
const connectToDatabase = require('../db/connection');
const seedData = require('./seedData');
const logger = require('../utils/logger');

// Connect to the database
connectToDatabase();

// Load models
const Taxonomy = require('../models/taxonomy');
const Category = require('../models/category');
const Skill = require('../models/skill');

async function seedDataCollections() {
  try {
    // Seed taxonomies data
    const seedTaxonomies = await Taxonomy.insertMany(seedData.taxonomies);
    logger.info('Taxonomies data seeded successfully.');

    // Seed categories data
    const seedCategories = await Category.insertMany(seedData.categories);
    logger.info('Categories data seeded successfully.');

    // Map the taxonomy and category names to their IDs
    const taxonomyMap = new Map(seedTaxonomies.map(t => [t.name, t._id]));
    const categoryMap = new Map(seedCategories.map(c => [c.name, c._id]));

    // Map taxonomy names to IDs for skills data
    const skillsData = seedData.skills.map(skill => ({
      ...skill,
      category: categoryMap.get(skill.category),
      taxonomy: {
        id: taxonomyMap.get(skill.taxonomy.name),
        name: skill.taxonomy.name,
      },
    }));

    // Seed skills data
    await Skill.insertMany(skillsData);
    logger.info('Skills data seeded successfully.');
  } catch (error) {
    logger.error('Error seeding data:', error);
  } finally {
    mongoose.disconnect();
  }
}

seedDataCollections();
