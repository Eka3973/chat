import React from 'react'
import {ActivityIndicator, TouchableOpacity, View} from 'react-native'
import Text from '../../../../common/CustomTextInput'
import styles from './styles'
import {colors} from "../../../../assets/styles/colors";
import Button from "../../../../common/CustomButton";
import TextInput from "../../../../common/CustomInput";
import * as actions from '../../actions';
import {useDispatch, useSelector} from "react-redux";
import {getLoginError, getLoginIsLoading, getLoginValue} from "../../selectors";
import {AuthContainer} from "../AuthContainer";
import {routs} from "../../../../navigation/routs";
import {useNavigation} from "@react-navigation/native";


export const LoginScreen = () => {
    const dispatch = useDispatch();
    const error = useSelector(getLoginError)
    const fieldValue = useSelector(getLoginValue)
    const isLoading = useSelector(getLoginIsLoading)
    const navigation = useNavigation()

    const handleChange = (value, name) => {
        dispatch(actions.setLoginValue({...fieldValue, [name]: value}))
    }

    const login = () => {
        const {email, password} = fieldValue
        dispatch(actions.login({email, password}))
    }

    return (
        <AuthContainer>
            <View style={styles.auth}>
                {isLoading ?
                    <ActivityIndicator/> :
                    <>
                        <TextInput
                            name="email"
                            styles={styles.input}
                            handleChange={handleChange}
                            placeholder="Enter your email"
                            placeholderTextColor={colors.darkBlue}
                            value={fieldValue.email}

                        />
                        <TextInput
                            name="password"
                            styles={styles.input}
                            handleChange={handleChange}
                            placeholder="Enter password"
                            placeholderTextColor={colors.darkBlue}
                            value={fieldValue.password}

                        />
                        {error ? <Text styles={styles.errorText}>{error}</Text> : null}

                        <Button
                            label="SIGN IN"
                            onPress={login}
                            stylesButton={styles.button}
                            stylesButtonText={styles.buttonText}
                        />
                        <View style={styles.register}>
                            <Text styles={styles.registerText}>Don't have an account?</Text>
                            <TouchableOpacity  onPress={() => navigation.navigate(routs.register)}>
                                <Text styles={styles.registerCreate}>
                                Create
                            </Text>
                            </TouchableOpacity>
                        </View>
                    </>
                }
            </View>
        </AuthContainer>
    )
}
