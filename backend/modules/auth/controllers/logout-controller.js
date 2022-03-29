const logout = require('../services/logout')

module.exports = async (req, res, next) => {
    try {
        const {refreshToken} = req.cookies
        await logout(refreshToken)
        res.clearCookie('refreshToken')
        return res.sendStatus(200)
    } catch (e) {
        next(e)
    }
}
