module.exports = class UserDto {
    name
    email
    id
    isActivated
    avatarImage

    constructor(model) {
        this.name = model.userName
        this.email = model.email
        this.id = model.id
        this.isActivated = model.isActivated
        this.avatarImage = model.avatarImage
    }
}
