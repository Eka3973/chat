const login = require('../services/login')

module.exports = async (req, res, next) => {
    try {
        const {email, password} = req.body
        const userData = await login(email, password)
        res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 20 * 60 * 60 * 1000, httpOnly: true})
        return res.json(userData)

    } catch (e) {
        next(e)
    }
}
