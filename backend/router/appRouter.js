const express = require('express')
const router = express.Router()
const {createUser,getuser}  = require('../controller/appController')


router.get('/',getuser)
router.post('/',createUser)

module.exports = router