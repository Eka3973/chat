import io from 'socket.io-client'
import {BASE_API_URL} from "../config";



// const socket = io(BASE_API_URL, { autoConnect: false })
//
// socket.onAny((event, ...args) => {
//     console.log(event, args);
// })
//
// export default socket

export const socket = io(BASE_API_URL)

export const  connect = () =>{
    return new Promise(resolve => {
        if(!socket.id) {
            socket.connect()
        }
        socket.on('connect', ()=> {
            resolve(socket)
        })
    })
}

export const  disConnect = () =>{
    return new Promise(resolve => {
        console.log('diconnected saga', socket.id);
        socket.disconnect()
        resolve(socket)
    })
}
