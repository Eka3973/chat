const refresh = require('../services/refresh')

module.exports = async (req, res, next) => {
    try {
        const {refreshToken} = req.cookies
        const userData = await refresh(refreshToken)
        res.cookie(
            'refreshToken',
            userData.refreshToken,
            {
                maxAge: 30 * 20 * 60 * 60 * 1000,
                httpOnly: true
            }
        )
        return res.json(userData)
    } catch (e) {
        next(e)
    }
}
