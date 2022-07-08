import { takeEvery, call,  put} from 'redux-saga/effects';
import * as actions from '../actions';
import AuthService from "../../../services/AuthService"
import * as Keychain from "react-native-keychain";
import {deleteUser, setUser} from "../../../navigation/Main/actions/index";


function* handleRegistration({payload}) {
    try {
        const response = yield call(AuthService.registration, payload)
        yield put(actions.registrationSuccess())
        yield put(setUser(response.data))
        yield Keychain.setGenericPassword(response.data.user.id, response.data.accessToken)
    } catch (error) {
        yield put(actions.registrationFailure(error?.message))
    }
}

function* handleLogin({payload}) {
    try {
        const response = yield call(AuthService.login, payload)
        yield put(actions.loginSuccess())
        yield put(setUser(response.data))
        yield Keychain.setGenericPassword(response.data.user.id, response.data.accessToken)
    } catch (error) {

        yield put(actions.loginFailure(error?.message))
    }
}

function* handleLogout() {
    try {
        yield call(AuthService.logout)
        yield Keychain.resetGenericPassword();
        yield put(deleteUser())
    } catch (error) {
        console.log(error.response?.data.message)
    }
}

function* authSaga() {
    yield takeEvery(actions.registration, handleRegistration)
    yield takeEvery(actions.login, handleLogin)
    yield takeEvery(actions.logout, handleLogout)
}

export default authSaga
