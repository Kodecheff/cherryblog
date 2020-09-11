var express = require('express');
var router = express.Router();

//Import news schema
const News = require('../models/news');

/* ------------------------ Get fitness news --------------------- */
router.get('/', async (req, res) => {
  const news = await News.find({category: "fitness"})

  try{
    res.send(news)
  }catch(e){
    res.status(500).send(e)
  }
});

/* -------------------Get a specific fitness news--------------- */
router.get('/:id', async (req, res) => {
  const id = req.params.id;

  const news = await News.find({category: 'fitness', _id: id})

  try{
    res.send(news)
  }catch(e){
    res.status(500).send()
  }

  // News.findById(id)
  // .exec()
  // .then(doc => {
  //   console.log(doc);
  //   if(doc) {
  //     res.status(200).json(doc)
  //   } else {
  //     res.status(404).json({message: "Entry not found!"})
  //   }
  // })
  // .catch(err => {
  //   console.log(err)
  //   res.status(500).json({error: err})
  // })
})

module.exports = router;