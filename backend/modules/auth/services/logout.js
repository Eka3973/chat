const tokenService = require('../../../service/token-service')

module.exports = async (refreshToken) => {
    return await tokenService.removeToken(refreshToken)
}
