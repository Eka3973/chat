import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

import registration from './registration';
import login from './login';

const authConfig = {
    key: 'auth',
    storage: AsyncStorage,
    blacklist: ['registration', 'login'],
};

const authReducer = combineReducers({ registration, login });

export default persistReducer(authConfig, authReducer);
