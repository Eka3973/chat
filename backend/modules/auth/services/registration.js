const UserModel = require('../../../models/user-model')
const mailService = require('../../../service/mail-service')
const ApiError = require('../../../exceptions/api-error')
const tokenService = require('../../../service/token-service')
const UserDto = require('../../../dtos/user-dto')
const bcrypt = require('bcrypt')
const uuid = require('uuid')

module.exports = async (userName, email, password, host) => {
    const candidate = await UserModel.findOne({email})
    if (candidate) {
        throw ApiError.BadRequest(`Пользователь с таким email уже существует`)
    }
    const hashPassword = await bcrypt.hash(password, 3)
    const activationLink = uuid.v4()
    const user = await UserModel.create({userName, email, password: hashPassword, activationLink})
    await mailService.sendActivationMail(email, `http://${host}/auth/activate/${activationLink}`)

    const userDto = new UserDto(user)
    const tokens = tokenService.generateToken({...userDto})
    await tokenService.saveToken(userDto.id, tokens.refreshToken)

    return {...tokens, user: userDto}
}
