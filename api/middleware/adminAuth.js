const jwt = require('jsonwebtoken')
const Admin = require('../models/admin')

const adminAuth = async (req, res, next) => {
  try{
    const token = req.header('Authorization').replace('Bearer ', '')
    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    const admin = await Admin.findOne({_id: decoded._id, 'tokens.token': token})

    if(!admin){
      throw new Error()
    }

    req.token = token
    req.admin = admin
    next()
  }catch(e){
    res.status(401).send({error: 'You are not authorized!'})
  }
}

module.exports = adminAuth;