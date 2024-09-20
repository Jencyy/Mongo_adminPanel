const UserModel = require('../models/user-model');
const fs = require('fs');
const path = require('path');


const defaultCon = async (req, res) => {
 if(req.cookies.user_id){
     let data = await UserModel.find({});
     console.log("data",data)
     res.render('dashboard', { data });

 }else{
    console.log("cookies do not found")
    res.redirect('/logInForm')
 }
};


const profileCon = async (req,res) =>{
  
    let user = await UserModel.findOne({});
    console.log("user",user)
    res.render('profile',{user})
}


module.exports = {
    defaultCon,
    profileCon
};
