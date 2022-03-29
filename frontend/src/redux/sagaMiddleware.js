import createSagaMiddleware from 'redux-saga';

import Reactotron from '../ReactotronConfig';

const sagaMonitor = Reactotron.createSagaMonitor();

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

export default sagaMiddleware;
