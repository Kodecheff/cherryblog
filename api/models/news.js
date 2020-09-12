const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
  category: {
    type: String,
    required: true,
    lowercase: true
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

newsSchema.methods.toJSON = function(){
  const news = this

  const newsObject = news.toObject()
  delete newsObject.image

  return newsObject
}

const News = mongoose.model('News', newsSchema);

module.exports = News