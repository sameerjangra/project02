const Profile = require("../model/profileModel");
const User = require("../model/userModel");


exports.login = async(req,res)=>{
const{username ,password} = req.body;
const user = await User.findOne({username,password})
if(user){
    res.json({message:"User Login Successfully"})
    const data = new Profile({username,password});
    data.save();
}else{
    res.status(401).send('Invalid credentials');
}
}


