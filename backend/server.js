const express  = require('express')
const mongoose = require('mongoose')
const app = express()
const userRoute = require('./router/appRouter')
require('dotenv').config()
const cors = require('cors')

//middleware
app.use(express.json()) //all request passed to req 
app.use(cors())

app.get('/api',(req,res)=>{
    res.json({message:"Hello Their!"})
})

app.use('/api/user',userRoute)

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("Connected to db and listting port" + process.env.PORT)
    })
})
.catch((err)=>{
    console.log(err)
})