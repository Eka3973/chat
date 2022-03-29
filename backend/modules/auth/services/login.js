const UserModel = require('../../../models/user-model')
const ApiError = require('../../../exceptions/api-error')
const bcrypt = require('bcrypt')
const UserDto = require('../../../dtos/user-dto')
const tokenService = require('../../../service/token-service')

module.exports = async (email, password) => {
    const user = await UserModel.findOne({email})
    if (!user) {
        throw ApiError.BadRequest('Пользователь с таким email не найден')
    }
    if (!user.isActivated) {
        throw ApiError.BadRequest('Вы не подтвердили свой email')
    }
    const isPassEquals = await bcrypt.compare(password, user.password)
    if (!isPassEquals) {
        throw ApiError.BadRequest('Неверный пароль')
    }
    const userDto = new UserDto(user)
    const tokens = tokenService.generateToken({...userDto})
    await tokenService.saveToken(userDto.id, tokens.refreshToken)

    return {...tokens, user: userDto}
}
