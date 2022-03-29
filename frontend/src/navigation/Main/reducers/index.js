import { combineReducers } from 'redux'
import {createMigrate, persistReducer} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

import user from './user';

const mainConfig = {
    key: 'main',
    storage: AsyncStorage,
    whitelist: ['user'],
};

const mainReducer = combineReducers({ user });

export default persistReducer(mainConfig, mainReducer);
