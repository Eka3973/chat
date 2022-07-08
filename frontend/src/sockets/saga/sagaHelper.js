import {eventChannel, END} from 'redux-saga'

export const createChannel = (socket) => {
    socket.connect()

    return eventChannel(emit => {
        console.log('connect SAGA socket', socket.id)
        socket.on('seconds', (msg) => {
            console.log(msg)
        });
        socket.emit('first', 'fir');
        return () => socket.close()
    })

}
