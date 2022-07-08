import {takeEvery, call, put, take} from 'redux-saga/effects'
import {createChannel} from "./sagaHelper"
import {connect, disConnect} from "../socket"
import * as actions from '../actions'


function* handleSocketConnect() {

    const socket = yield call(connect)

    const channel = yield call(createChannel, socket)


    while (true) {
        try {
            const action = yield take(channel)
            yield put(action)
        } catch (err) {
            console.log('socket error', err)
            channel.close()
        }
    }

}


function* handleSocketDisconnect() {
    yield call(disConnect)
}


function* messageSaga() {
    yield takeEvery(actions.socketConnect, handleSocketConnect)
    yield takeEvery(actions.socketDisconnect, handleSocketDisconnect)
}

export default messageSaga
