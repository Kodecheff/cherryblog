var express = require('express');
var router = express.Router();
const News = require('../models/news')

router.get('/', async (req, res, next) => {
  const news = await News.find({category: 'food'})

  try{
    res.send(news)
  }catch(e){
    res.status(500).send()
  }
})

router.get('/:id', async (req, res) => {
  const id = req.params.id
  const news = await News.find({category: 'food', _id: id})

  try{
    if(!news){
      return res.status(404).send({error: 'News not valid'})
    }
    res.send(news)
  }catch(e){

  }
})

module.exports = router;