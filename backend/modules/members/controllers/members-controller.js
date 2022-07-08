const userService = require('../../../service/members-service')

module.exports = async (req, res, next) => {
    try {
        const { id } = req.body
        const users = await userService.getAllUsers(id)
        return res.json(users)
    } catch (e) {
        next(e)
    }
}
