import { all } from 'redux-saga/effects';

import authSaga from '../../modules/Auth/saga';

function* rootSaga() {
    yield all([
        authSaga(),
    ]);
}

export default rootSaga;
