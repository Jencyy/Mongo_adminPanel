const mongoose = require('mongoose')

const signUpSchema = new mongoose.Schema({
    name: String,
    email:  { type: String, unique: true, required: true },
    path: String,
    password: String,
    con_password: String
})

const UserModel = mongoose.model('users',signUpSchema)

module.exports = UserModel