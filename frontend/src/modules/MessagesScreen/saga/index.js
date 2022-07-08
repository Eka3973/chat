import {takeEvery, call, put} from 'redux-saga/effects'
import * as actions from '../actions'
import MessagesService from "../../../services/MessagesService"


function* handleAddMessage({payload}) {
    try {
        yield call(MessagesService.addMessage, payload)
        yield put(actions.addMessageSuccess())
    } catch (error) {
        yield put(actions.addMessageFailure(error.message))
    }
}

function* handleGetMessages({payload}) {
    try {
        const response = yield call(MessagesService.getMessages, payload)
        yield put(actions.getMessagesSuccess())
        yield put(actions.setMessages(response.data))
    } catch (error) {
        yield put(actions.getMessagesFailure(error.message))
    }
}


function* messageSaga() {
    yield takeEvery(actions.addMessage, handleAddMessage)
    yield takeEvery(actions.getMessages, handleGetMessages)
}

export default messageSaga
