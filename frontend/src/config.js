import { Platform } from 'react-native'
import env from 'react-native-config'


const {API_URL_ANDROID, API_URL} = env

export const BASE_API_URL = Platform.select({
  android: API_URL_ANDROID || API_URL,
  ios: API_URL,
})
