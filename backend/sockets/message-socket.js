const messageModel = require("../models/message-model");

module.exports = (io, socket) => {

    socket.on('messages:get', msg => {
        console.log(msg)
        socket.emit('get', msg)
    })

    socket.on('message:add', async (msg) => {
        try {
            const {from, to, message } = msg
            const data = await messageModel.create({
                message: {text: message},
                users: [from, to],
                sender: from,
            })
            socket.emit('message:set',
                { id: data._id.toString(),
                    sender: data.sender.toString() === from,
                    message: data.message.text}
            )



        } catch (e) {
            console.log(e)
        }
    })
}


