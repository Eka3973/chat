require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const authRoutes = require('./modules/auth/routes');
const errorMiddleware = require('./middlewares/error-middleware')
const { createServer } = require("http");
const { Server } = require("socket.io");


const PORT= process.env.PORT || 5000
const app = express()
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}))
app.use('/auth', authRoutes)
app.use(errorMiddleware)


io.on("connection", (socket) => {
    console.log('a user connected')
    socket.on('message', msg => {
        console.log(msg)
        io.emit('message', 'sss')
    })
})

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        server.listen(PORT, ()=>console.log(`Server started on PORT = ${PORT}`))
    }catch (e) {
        console.log(e)
    }

}
start()
