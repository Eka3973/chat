import {persistReducer} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

import user from './user';

const mainConfig = {
    key: 'main',
    storage: AsyncStorage,
    whitelist: ['user'],
};

export default persistReducer(mainConfig, user);
