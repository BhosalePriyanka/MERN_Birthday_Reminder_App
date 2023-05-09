const Birthdayuser = require('../model/appModel')

const createUser = async(req,res)=>{
    const{name,dateofBirth} = req.body 

    const emptyField = [];
if(!name){
    emptyField.push('name')
}
if(!dateofBirth){
    emptyField.push('dateofBirth')
}

if(emptyField.length>0){
  return  res.json({error:"Fill every field.",emptyField})
}
try{
    const user = await Birthdayuser.create({name,dateofBirth})
    res.json(user)
}
catch(error){
res.json({error:error.message})
}
    
}


const getuser = async(req,res)=>{
    const users = await Birthdayuser.find()
    res.json(users)
}

module.exports = {createUser,getuser}