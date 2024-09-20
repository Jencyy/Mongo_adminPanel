const express=require('express');
const controllers=require('../controllers/adminController');
const signUpCon = require('../controllers/signUpController')
const logInCon = require('../controllers/logInController')

const upload = require('../config/multer');

const router= express();

router.get('/',controllers.defaultCon);
router.get('/profile',controllers.profileCon)
router.get('/signUpForm',signUpCon.signUpFormCon)
router.post('/signUp',upload.single('avatar'),signUpCon.signUpCon)
router.post('/logIn',logInCon.logInCon)
router.get('/logInForm',logInCon.logInFormCon)





module.exports= router; 