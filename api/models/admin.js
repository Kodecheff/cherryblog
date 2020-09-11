const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const validator = require('validator')
const jwt = require('jsonwebtoken')

const adminSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    lowercase: true,
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error('Email is invalid')
      }
    }
  },
  password: {
    type: String,
    trim: true,
    required: true,
    validate(value){
      if(!value){
        throw new Error('Password is required')
      }else if(value.toLowerCase().includes('password')){
        throw new Error('password must not contain "Password"')
      }
    }
  },
  tokens: [{
    token: {
      type: String,
      required: true
    }
  }]
})


/* ---------------- Generate auth token ----------------- */
adminSchema.methods.generateAuthToken = async function(){
  const admin = this
  const token = await jwt.sign({_id: admin._id.toString()}, 'mysecretkey')

  admin.tokens = admin.tokens.concat({token})

  await admin.save()
  return token
}

adminSchema.statics.findByCredentials = async (email, password) => {
  const admin = await Admin.findOne({ email })

  if(!admin){
    throw new Error('Unable to login')
  }

  const isMatch = await bcrypt.compare(password, admin.password)

  if(!isMatch){
    throw new Error('Unable to login')
  }

  return admin
}

/* --------------- Hash password before save ------------------- */
adminSchema.pre('save', async function(next){
  const admin = this

  if(admin.isModified('password')){
    admin.password = await bcrypt.hash(admin.password, 8)
  }

  next()
})

const Admin = mongoose.model('Admin', adminSchema)

module.exports = Admin