const User = require("../model/userModel")

exports.register = async(req,res)=>{
    const { username,password} =req.body;
    const user = new User ({username ,password});
    await user.save();
    res.json("User is Register Sucessfully")
    console.log("Register Success")
} 

exports.findallusers = async(req,res)=>{
    const alluser = await User.find()
    res.json({message:"All Users",alluser})
}
