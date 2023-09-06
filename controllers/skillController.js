const Skill = require('../models/skill'); // Replace with your actual model file

// Controller functions for skills
const getAllSkills = async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getSkillById = async (req, res) => {
  const { id } = req.params;
  try {
    const skill = await Skill.findById(id);
    if (!skill) {
      return res.status(404).json({ error: 'Skill not found' });
    }
    res.json(skill);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const createSkill = async (req, res) => {
  const { name, description, category, taxonomy, versions } = req.body;
  try {
    const skill = new Skill({
      name,
      description,
      category,
      taxonomy,
      versions,
    });
    const savedSkill = await skill.save();
    res.status(201).json(savedSkill);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
};

const updateSkill = async (req, res) => {
  const { id } = req.params;
  const { name, description, versions } = req.body;
  try {
    const skill = await Skill.findByIdAndUpdate(id, { name, description, versions }, { new: true });
    if (!skill) {
      return res.status(404).json({ error: 'Skill not found' });
    }
    res.json(skill);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
};

const deleteSkill = async (req, res) => {
  const { id } = req.params;
  try {
    const skill = await Skill.findByIdAndDelete(id);
    if (!skill) {
      return res.status(404).json({ error: 'Skill not found' });
    }
    res.json({ message: 'Skill deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllSkills,
  getSkillById,
  createSkill,
  updateSkill,
  deleteSkill,
};
