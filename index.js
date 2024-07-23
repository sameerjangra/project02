const express =require("express");
const UserRoutes = require("./routes/userRoutes");
const ProfileRoutes =  require("./routes/profileRoutes")
const mongoose =require ('mongoose')
require('dotenv').config()

const app =express();

app.use(express.json()); // middleware

app.get('/',(req,res,next)=>{
    res.send("Hello World!!!!!!")
});

app.use('/api/users',UserRoutes)
app.use('/api/users',ProfileRoutes)

mongoose.connect(process.env.MONGODB_CONNECT)
.then((db)=>{
    console.log("database is connected")
})
.catch((error)=>{
    console.error("database connection failed ", error)
})

app.listen(3000,()=>{
    console.log("Server is running at port 3000")
})

