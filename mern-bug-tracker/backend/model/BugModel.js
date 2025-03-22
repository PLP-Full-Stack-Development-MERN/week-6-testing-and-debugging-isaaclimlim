const mongoose = require('mongoose');

const bugSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: [true, "Title is required"], 
    trim: true, 
    minlength: 3, 
    maxlength: 100,
    index: true
  },
  description: { 
    type: String, 
    required: [true, "Description is required"], 
    trim: true, 
    minlength: 10, 
    maxlength: 500 
  },
  status: { 
    type: String, 
    enum: ['open', 'in-progress', 'resolved'], 
    default: 'open' 
  },
  assignedTo: { 
    type: String,
    default: 'Unassigned' 
  },
}, { timestamps: true });

module.exports = mongoose.model('Bug', bugSchema);
