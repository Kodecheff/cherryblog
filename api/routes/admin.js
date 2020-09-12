const express = require('express')
const router = express.Router();
const Admin = require('../models/admin')
const News = require('../models/news');
const multer = require('multer')
const sharp = require('sharp')
const adminAuth = require('../middleware/adminAuth')

/* -------------- Register admin -------------- */
router.post('/admin', async (req, res) => {
  const admin = new Admin(req.body)

  try{
    await admin.save()

    const token  = await admin.generateAuthToken()

    res.status(201).send({admin, token})
  }catch(e){
    res.status(400).send(e)
  }
})

/* ---------------- Login admin ------------------ */
router.post('/admin/login', async (req, res) => {
  try{
    const admin = await Admin.findByCredentials(req.body.email, req.body.password)
    const token = await admin.generateAuthToken()

    res.send({admin, token})
  }catch(e){
    res.status(400).send(e)
  }
})

/* -------------------- Logout admin ----------------------- */
router.post('/admin/logout', adminAuth, async (req, res) => {
  try{
    req.admin.tokens = req.admin.tokens.filter(token => {
      return token.token !== req.token
    })

    await req.admin.save()
    res.send()
  }catch(e){
    res.status(500).send()
  }
})

/* ----------------- Get admin --------------- */
router.get('/admin/me', adminAuth, async (req, res) => {

  try{
    res.send(req.admin)
  }catch(e){
    res.status(500).send(e)
  }
})


/* ------------------ Update admin ---------------------- */
router.patch('/admin/me', adminAuth, (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['name','email', 'password']
  const isValidOperation = updates.every(update => {
    return allowedUpdates.includes(update)
  })

  if(!isValidOperation){
    return res.status(400).send({error: "Invalid update"})
  }

  try{
    updates.forEach(update => {
      req.admin[update] = req.body[update]
    })
    req.admin.save()
    res.send(req.admin)
  }catch(e){

  }


})


/* -------------------- Post news ------------------ */
router.post('/news', adminAuth, async (req, res) => {
  const news = new News(req.body)

  try{
    await news.save()
    res.status(201).send(news)
  }catch(e){
    res.status(400).send()
  }
})

/* -------------------- Get news ------------------ */
router.get('/news', async (req, res) => {

  try{
    const news = await News.find({})
    res.send(news)
  }catch(e){
    res.status(500).send(e)
  }
})

/* ------------------ Update news -------------------- */
router.patch('/news/:id', adminAuth, async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ["category", "headline", "content"]
  const isValidOperation = updates.every(update => {
    return allowedUpdates.includes(update)
  })

  if(!isValidOperation){
    return res.status(400).send({error: "Invalid update"})
  }
  
  
  try{
    const news = await News.findOne({_id: req.params.id})
    updates.forEach(update => {
      news[update] = req.body[update]
    })
    await news.save()
    res.send(news)
  }catch(e){

  }
})

/* ----------------- Delete news ----------------------- */
router.delete('/news/:id', adminAuth, async(req, res) => {
  
  try{
    const news = await News.findByIdAndDelete(req.params.id)

    if(!news){
      return res.status(404).send({error: "Invalid news"})
    }

    res.send(news)
  }catch(e){
    res.status(400).send()
  }
})

/* ------------- Upload image ----------- */
const upload = multer({
  limits: {
    fileSize: 5000000
  },
  fileFilter(req, file, cb){
    if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
      return cb(new Error('Unsupported file format'))
    }
    cb(undefined, true)
  }
})


/* ------------------ Upload image ------------------ */
router.post('/news/:id/image', adminAuth, upload.single('image'), async(req, res) => {
  const news = await News.findOne({_id: req.params.id})
  const buffer = await sharp(req.file.buffer).resize({width: 250, height: 250}).png().toBuffer()

  news.image = buffer
  await news.save()
  res.send(news)
}, (error, req, res, next) => {
  res.status(400).send({error: error.message})
})

/* -------------------- Get news image ------------------ */
router.get('/news/:id/image', async (req, res) => {
  
  try{
    const news = await News.findOne({_id: req.params.id})

    if(!news || !news.image){
      throw new Error
    }
    res.set('Content-type', 'image/png')
    res.send(news.image)
  }catch(e){
    res.status(404).send()
  }
})


/* ------------------- Delete news ----------------------- */
router.delete('/news/:id/image', adminAuth, async (req, res) => {
  try{
    const news = await News.findOne({_id: req.params.id})
    if(!news || !news.image){
      throw new Error
    }
    news.image = undefined
    news.save()
    res.send()
  }catch(e){
    res.status(404).send()
  }
})



module.exports = router