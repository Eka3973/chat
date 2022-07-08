const messageModel = require('../../../models/message-model')
const messageHandlers = require('../../../sockets/message-socket')

module.exports = async (req, res, next) => {
    try {
        const io = req.app.get('io')
        const {from, to, message } = req.body
        const data = await messageModel.create({
            message: {text: message},
            users: [from, to],
            sender: from,
        })
        // messageHandlers(io, message)

        // io.sockets.emit('message:set', {
        //     id: data._id.toString(),
        //     sender: data.sender.toString() === from,
        //     message: data.message.text
        // })

        if (data) return res.json({msg: "successfully"})

    } catch (e) {
        next(e)
    }
}
