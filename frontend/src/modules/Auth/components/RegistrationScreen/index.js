import React from 'react'
import {ActivityIndicator, TouchableOpacity, View} from 'react-native'
import Text from '../../../../common/CustomText'
import styles from './styles'
import {colors} from "../../../../assets/styles/colors";
import Button from "../../../../common/CustomButton";
import TextInput from "../../../../common/CustomInput";
import * as actions from '../../actions';
import {useDispatch, useSelector} from "react-redux";
import {getRegistrationError, getRegistrationIsLoading, getRegistrationValue} from "../../selectors";
import {AuthContainer} from "../AuthContainer";
import {routs} from "../../../../navigation/routs";
import {useNavigation} from "@react-navigation/native";


export const RegistrationScreen = () => {
    const dispatch = useDispatch();
    const error = useSelector(getRegistrationError)
    const fieldValue = useSelector(getRegistrationValue)
    const isLoading = useSelector(getRegistrationIsLoading)
    const navigation = useNavigation()

    const handleChange = (value, name) => {
        dispatch(actions.setRegistrationValue({...fieldValue, [name]: value}))
    }

    const registerHandler = () => {
        const {userName, email, password} = fieldValue
        dispatch(actions.registration({userName, email, password}))
    }

    return (
        <AuthContainer>
            <View style={styles.auth}>
                {isLoading ?
                    <ActivityIndicator/> :
                    <React.Fragment>
                        <TextInput
                            name="userName"
                            styles={styles.input}
                            handleChange={handleChange}
                            placeholder="Enter your name"
                            placeholderTextColor={colors.darkBlue}
                            value={fieldValue.userName}
                            selectionColor={colors.darkBlue}

                        />
                        <TextInput
                            name="email"
                            styles={styles.input}
                            handleChange={handleChange}
                            placeholder="Enter your email"
                            placeholderTextColor={colors.darkBlue}
                            value={fieldValue.email}
                            selectionColor={colors.darkBlue}

                        />
                        <TextInput
                            name="password"
                            styles={styles.input}
                            handleChange={handleChange}
                            placeholder="Enter password"
                            placeholderTextColor={colors.darkBlue}
                            value={fieldValue.password}
                            selectionColor={colors.darkBlue}

                        />
                        {error ? <Text styles={styles.errorText}>{error}</Text> : null}

                       <Button
                            label="Register"
                            onPress={registerHandler}
                            stylesButton={styles.button}
                            stylesButtonText={styles.buttonText}
                        />
                        <TouchableOpacity onPress={() => navigation.navigate(routs.login)}>
                            <Text styles={styles.loginLink}>
                                Sign In
                            </Text>
                        </TouchableOpacity>
                    </React.Fragment>
                }
            </View>
        </AuthContainer>
    )
}
