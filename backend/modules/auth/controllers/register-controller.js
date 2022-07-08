const {validationResult} = require('express-validator')
const ApiError = require('../../../exceptions/api-error')
const registration = require('../services/registration')

module.exports = async (req, res, next) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return next(ApiError.BadRequest('Некорректный email или пароль', errors.array()))
        }
        const {userName, email, password} = req.body
        const {host} = req.headers;
        const userData = await registration(userName, email, password, host)
        res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 20 * 60 * 60 * 1000, httpOnly: true})
        return res.json(userData)
    } catch (e) {
        next(e)
    }
}


