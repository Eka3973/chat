require('dotenv').config()
const express = require('express')
const session = require("express-session")
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const authRoutes = require('./modules/auth/routes')
const membersRoutes = require('./modules/members/routes')
const messagesRoutes = require('./modules/messages/routes')
const errorMiddleware = require('./middlewares/error-middleware')
const {createServer} = require("http");
const {Server} = require("socket.io");


const registerMessageHandlers = require('./sockets/message-socket')


const PORT = process.env.PORT || 5000
const app = express()
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: process.env.CLIENT_URL,
        methods: ['GET', 'POST'],
        credentials: true
    }
})
app.set('io', io)

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}))
app.use('/auth', authRoutes)
app.use('/members', membersRoutes)
app.use('/messages', messagesRoutes)
app.use(errorMiddleware)



io.use(async (socket, next) => {
    try {
        console.log('yop', socket.id)
        return next()
    } catch (e) {
        next(new Error("unknown user"));
    }
});


const onConnection = async (socket) => {
    try {
        console.log('a user connected', socket.id)
        // const { roomId } = socket.handshake.auth
        // socket.roomId = roomId
        // socket.join(roomId)
        const sockets = Array.from(io.sockets.sockets).map(socket => socket[0])

        registerMessageHandlers(io, socket)

        socket.on('disconnect', () => {
            console.log('User disconnected', socket.id)
            socket.disconnect()
        })
    } catch (e) {

    }

}
io.on("connection", onConnection)


const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        server.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`))
    } catch (e) {
        console.log(e)
    }

}
start()
