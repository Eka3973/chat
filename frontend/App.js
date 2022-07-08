import React from 'react'
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import {MainComponent} from './src/navigation/Main/components'
import {SafeAreaProvider} from 'react-native-safe-area-context/src/SafeAreaContext'
import {Provider} from "react-redux"
import configureStore from "./src/redux/store"
import {PersistGate} from "redux-persist/integration/react"
import {ActivityIndicator} from "react-native"
import {socket} from "./src/sockets/socket";

const { store, persistor } = configureStore()

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}  loading = { <ActivityIndicator /> } >
                <SafeAreaProvider>
                    <NavigationContainer initialRouteName="Main">
                        <MainComponent/>
                    </NavigationContainer>
                </SafeAreaProvider>
            </PersistGate>
        </Provider>
    )
}

export default App
