const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
  category: {
    type: String
  },
  headline: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  image: {
    type: Buffer
  }
},{
  timestamps: true
});

const News = mongoose.model('News', newsSchema);

module.exports = News