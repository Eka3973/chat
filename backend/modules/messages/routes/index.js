const express = require('express')
const addMessage = require('../controllers/add-message-controller')
const getMessage = require('../controllers/get-message-controller')

const router = express()

router.post('/addmsg', addMessage)
router.post('/getmsg', getMessage)

module.exports = router
