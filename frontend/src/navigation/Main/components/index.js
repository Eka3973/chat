import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import {LoginScreen} from '../../../modules/Auth/components/LoginScreen'
import {routs} from '../../routs'
import {ChatsScreen} from '../../../modules/ChatsListScreen/components'
import {ChatScreen} from '../../../modules/ChatScreen'
import {ProfilePopUp} from '../../../modules/ProfilePopUp/components'
import {SettingScreen} from '../../../modules/SettingScreen'
import {useSelector} from "react-redux";
import {getUser, getUserIsActivated} from "../selectors";
import {ConfirmEmailScreen} from "../../../modules/Auth/components/ComfirmEmailScreen";
import {RegistrationScreen} from "../../../modules/Auth/components/RegistrationScreen";

const MainStack = createNativeStackNavigator()


export const MainComponent = () => {
    const userData = useSelector(getUser)
    const userIsActivated = useSelector(getUserIsActivated)


    const renderScreens = () => {
        if(userData && !userIsActivated) {
            return (<MainStack.Screen
                name={routs.login}
                component={ConfirmEmailScreen}
                options={{
                    headerShown: false,
                }}
            />)
        }
        if (userData && userIsActivated) {
            return (
                <>
                    <MainStack.Screen
                        name={routs.chatRoot}
                        component={ChatsScreen}
                        options={{
                            headerRight: () => <ProfilePopUp/>,
                        }}
                    />
                    <MainStack.Screen name={routs.chat} component={ChatScreen}/>
                    <MainStack.Screen
                        name={routs.setting}
                        component={SettingScreen}
                        options={{
                            gestureDirection: 'vertical-inverted',
                        }}
                    />
                </>
            )
        }
        return (
            <>
                <MainStack.Screen
                    name={routs.login}
                    component={LoginScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <MainStack.Screen
                    name={routs.register}
                    component={RegistrationScreen}
                    options={{
                        headerShown: false,
                    }}
                />
            </>
        )
    }

    return (
        <MainStack.Navigator>
            {renderScreens()}
        </MainStack.Navigator>
    )
}
