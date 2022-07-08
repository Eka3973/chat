import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Reactotron from '../../src/ReactotronConfig';
import sagaMiddleware from './sagaMiddleware';
import rootSaga from './saga';
import rootReducer from '../redux/reducers';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['auth', 'users', 'messages'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
    const store = createStore(
        persistedReducer,
        compose(applyMiddleware(sagaMiddleware), Reactotron.createEnhancer())
    );
    const persistor = persistStore(store);
    sagaMiddleware.run(rootSaga);
    return {
        store,
        persistor,
    };
};

export default configureStore;
