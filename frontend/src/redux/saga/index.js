import { all } from 'redux-saga/effects';

import authSaga from '../../modules/Auth/saga';
import membersSaga from "../../modules/MembersScreen/saga";
import messageSaga from "../../modules/MessagesScreen/saga";
import socketSaga from "../../sockets/saga/";

function* rootSaga() {
    yield all([
        authSaga(),
        membersSaga(),
        messageSaga(),
        socketSaga(),
    ]);
}

export default rootSaga;
