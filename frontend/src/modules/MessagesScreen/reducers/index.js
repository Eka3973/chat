import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

import messages from './messages';

const membersConfig = {
    key: 'messages',
    storage: AsyncStorage,
    whitelist: ['messages']
}

export default persistReducer(membersConfig, messages);
