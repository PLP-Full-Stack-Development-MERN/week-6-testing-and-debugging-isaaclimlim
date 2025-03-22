const express = require('express');
const Bug = require('../model/BugModel.js');
const { body, validationResult } = require('express-validator');

const router = express.Router();

// Get all bugs
router.get('/', async (req, res) => {
  try {
    const bugs = await Bug.find();
    res.json(bugs);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Create a new bug with validation
router.post(
  '/',
  [
    body('title').trim().notEmpty().withMessage('Title is required'),
    body('description').trim().notEmpty().withMessage('Description is required'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { title, description } = req.body;
      const newBug = new Bug({ title, description });
      await newBug.save();
      res.status(201).json(newBug);
    } catch (err) {
      res.status(400).json({ message: 'Error creating bug', error: err.message });
    }
  }
);

// Update bug status safely
router.patch('/:id', async (req, res) => {
  try {
    const bug = await Bug.findById(req.params.id);
    if (!bug) return res.status(404).json({ message: 'Bug not found' });

    Object.assign(bug, req.body);
    await bug.save();
    res.json(bug);
  } catch (err) {
    res.status(400).json({ message: 'Error updating bug', error: err.message });
  }
});

// Delete a bug safely
router.delete('/:id', async (req, res) => {
  try {
    const bug = await Bug.findById(req.params.id);
    if (!bug) return res.status(404).json({ message: 'Bug not found' });

    await bug.deleteOne();
    res.json({ message: 'Bug deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
