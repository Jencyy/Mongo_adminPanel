const UserModel = require('../models/user-model')
const bcrypt = require('bcrypt');
const saltRounds = 10;

const signUpFormCon = (req, res) => {
    res.render('signUpForm');
}
const signUpCon = async (req, res) => {
    console.log("body", req.body)
    // const existingUser = await UserModel.findOne({ email: req.body.email });
    // if (existingUser) {
    //     // If email exists, redirect to sign up page with a message
    //     console.log('Email already exists');
    //     return res.redirect('/signUpForm?error=EmailAlreadyExists'); 
    // }
    if (req.body.password === req.body.con_password) {

        bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
            try {

                const users = await new UserModel({
                    name: req.body.name,
                    email: req.body.email,
                    path: req.file.path,
                    password: hash,
                });
                const user = await users.save();

                console.log("users", user)
                console.log("file img", req.file)

                res.redirect('/logInForm')
            } catch (err) {
                return res.redirect('/signUpForm?error=EmailAlreadyExists')
            }

        })
    } else {
        res.redirect('/signUpForm')
    }
}
module.exports = {
    signUpFormCon,
    signUpCon
};
