import {ActivityIndicator, Text, TouchableOpacity, View} from "react-native"
import React from "react"
import {AuthContainer} from "../AuthContainer"
import Button from "../../../../common/CustomButton"
import styles from "./styles"
import {useDispatch, useSelector} from "react-redux"
import * as actions from "../../actions"
import {getLoginIsLoading, getLoginError, getRegistrationValue} from "../../selectors"


export const ConfirmEmailScreen = () => {
    const dispatch = useDispatch()
    const value = useSelector(getRegistrationValue)
    const error = useSelector(getLoginError) || ''
    const isLoading = useSelector(getLoginIsLoading)

    const login = () => {
        dispatch(actions.login({...value}))
    }

    return (
        <AuthContainer>
            <View style={styles.container}>
                {isLoading ?
                    <ActivityIndicator/> :
                    <>
                        <Text style={styles.text}>
                            Hi! Please check your inbox an confirm your email before using this app!
                        </Text>
                        <View style={styles.line}/>
                        <Text style={styles.text}>{error}</Text>
                        <Button
                            label="I've done that!"
                            onPress={login}
                            stylesButton={styles.button}
                            stylesButtonText={styles.buttonText}
                        />

                    </>
                }
            </View>

        </AuthContainer>
    )
}
