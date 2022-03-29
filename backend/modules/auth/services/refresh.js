const ApiError = require('../../../exceptions/api-error')
const tokenService = require('../../../service/token-service')
const UserModel = require('../../../models/user-model')
const UserDto = require('../../../dtos/user-dto')

module.exports = async (refreshToken) => {
    if (!refreshToken) {
        throw ApiError.UnauthorizedError()
    }
    const userData = tokenService.validateRefreshToken(refreshToken)
    const tokenFromDb = await tokenService.findToken(refreshToken)
    if (!userData || !tokenFromDb) {
        throw ApiError.UnauthorizedError()
    }
    const user = await UserModel.findById(userData.id)
    const userDto = new UserDto(user)
    const tokens = tokenService.generateToken({...userDto})
    await tokenService.saveToken(userDto.id, tokens.refreshToken)

    return {...tokens, user: userDto}
}
