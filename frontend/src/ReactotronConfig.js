import Reactotron from 'reactotron-react-native'
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {reactotronRedux} from "reactotron-redux"
import sagaPlugin from 'reactotron-redux-saga'
import ReactotronFlipper from 'reactotron-react-native/dist/flipper';

export const HOST = Platform.select({
    android: 'localhost',
    ios: 'localhost',
})

const reactotron = Reactotron.configure({
    createSocket: (path) => new ReactotronFlipper(path),
    host: HOST,
    port: 9090,
})
    .setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
    .configure() // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .connect() // let's connect!
    .use(reactotronRedux())
    .use(sagaPlugin())

export default reactotron
