const messageModel = require('../../../models/message-model')
const messageHandlers = require("../../../sockets/message-socket");

module.exports = async (req, res, next) => {
    try {
        const {from, to} = req.body
        const messages = await messageModel
            .find({
            users: {
                $all: [from, to],
            },
        })
            .sort({
            updatedAt: 1
        })

        const projectMessage = messages.map(msg => {

           return {
               id: msg._id.toString(),
               sender: msg.sender.toString() === from,
               message: msg.message.text,
           }
        })

       return res.json(projectMessage)
    } catch (e) {
        next(e)
    }
}
