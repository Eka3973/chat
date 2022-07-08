import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

import members from './members'

const membersConfig = {
    key: 'members',
    storage: AsyncStorage,
    whitelist: ['members']
}
export default persistReducer(membersConfig, members);
