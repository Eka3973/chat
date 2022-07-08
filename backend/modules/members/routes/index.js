const express = require('express')
const getAllMembers = require('../controllers/members-controller')

const router = express()

router.post('/', getAllMembers)

module.exports = router
