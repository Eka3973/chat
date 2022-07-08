import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import {LoginScreen} from '../../../modules/Auth/components/LoginScreen'
import {routs} from '../../routs'
import {MembersScreen} from '../../../modules/MembersScreen/components'
import {MessagesScreen} from '../../../modules/MessagesScreen/components'
import {ProfilePopUp} from '../../../modules/ProfilePopUp/components'
import {SettingScreen} from '../../../modules/SettingScreen'
import {useSelector} from "react-redux";
import {getMember, getUser, getUserIsActivated} from "../selectors";
import {ConfirmEmailScreen} from "../../../modules/Auth/components/ComfirmEmailScreen";
import {RegistrationScreen} from "../../../modules/Auth/components/RegistrationScreen";
import {colors} from "../../../assets/styles/colors"
import styles from "../../../modules/MembersScreen/components/styles";
import {Image} from "react-native";


const MainStack = createNativeStackNavigator()


export const MainComponent = () => {
    const userData = useSelector(getUser)
    const userIsActivated = useSelector(getUserIsActivated)
    // const {userName} = useSelector(getMember)

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
                        name={routs.members}
                        component={MembersScreen}
                        options={{
                            title: 'Amazing chat',
                            headerTitleAlign: 'right',
                            headerTitleStyle: {
                                fontSize: 20,
                                fontFamily: 'Pacifico-Regular',
                            },
                            headerRight: () => <ProfilePopUp/>,
                        }}
                    />
                    <MainStack.Screen
                        name={routs.messages}
                        component={MessagesScreen}
                        options={({ route }) => ({ title: '', headerBackTitle: route.params.userName })}
                    />
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
        <MainStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: colors.darkBlue,
            },
            headerTintColor: colors.white,
        }}>
            {renderScreens()}
        </MainStack.Navigator>
    )
}
