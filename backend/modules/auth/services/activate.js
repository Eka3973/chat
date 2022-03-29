const UserModel = require('../../../models/user-model')
const ApiError = require('../../../exceptions/api-error')

module.exports = async (activationLink) => {
    const user = await UserModel.findOne({activationLink})
    if (!user) {
        throw ApiError.BadRequest('Неккоректная ссылка активации')
    }
    user.isActivated = true
    await user.save()
}
