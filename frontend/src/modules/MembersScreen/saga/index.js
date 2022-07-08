import {takeEvery, call, put} from 'redux-saga/effects'
import * as actions from '../actions'
import MembersService from "../../../services/MembersService";


function* handleGetMembers({payload}) {
    try {
        const response = yield call(MembersService.getMembers, payload)
        yield put(actions.getMembersSuccess())
        yield put(actions.setMembers(response.data))
    } catch (error) {
        yield put(actions.getMembersFailure(error.message))
    }
}


function* membersSaga() {
    yield takeEvery(actions.getMembers, handleGetMembers)
}

export default membersSaga
