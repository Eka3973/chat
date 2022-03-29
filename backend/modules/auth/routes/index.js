const express = require('express')
const registerController = require('../controllers/register-controller')
const {body} = require('express-validator')
const loginController = require('../controllers/login-controller')
const activateController = require('../controllers/activate-controller')
const refreshController = require('../controllers/refresh-controller')
const logoutController = require('../controllers/logout-controller')

const router = express()

router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min: 3, max: 32}),
    registerController
)
router.post('/login', loginController)
router.get('/activate/:link', activateController)
router.get('/refresh', refreshController)
router.post('/logout', logoutController)

module.exports = router
