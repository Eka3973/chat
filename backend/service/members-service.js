const UserModel = require('../models/user-model')

class MembersService {
       async getAllUsers(id) {
        const members = await UserModel.find({ _id: {$ne: id} }).select([
            '_id',
            'email',
            'userName',
            'avatar',
        ])
        return members
    }
}

module.exports = new MembersService()
