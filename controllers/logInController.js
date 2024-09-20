const UserModel = require('../models/user-model');
const bcrypt = require('bcrypt');

const logInFormCon = (req, res) => {
    res.render('loginForm')
}


    const logInCon = async (req, res) => {

        const { email, password } = req.body;
        // Find user by email
        const user = await UserModel.findOne({ email: email });
        console.log("user",user)
        if (user) {
            bcrypt.compare(password, user.password, (err, r) => {
                if (!err) {
                    res.cookie('user_id',user._id);
                    res.redirect('/');
                } else {
                    res.redirect('/logInForm')
                }
            })
        } else {
            res.redirect('/signUpForm')
        }


    };


module.exports = {
    logInFormCon,
    logInCon
}