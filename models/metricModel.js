const mongoose = require('mongoose');

const metricSchema = new mongoose.Schema({
  taskId: {
    type: String,
    required: true,
  },
  operation: {
    type: String,
    required: true,
    enum: ['create', 'update', 'delete']
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Metric', metricSchema);
