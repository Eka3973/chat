import styles from "./styles";
import {View} from "react-native";
import Text from "../../../../common/CustomTextInput";
import React from "react";


export const AuthContainer = ({children}) => {
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Text styles={styles.logoText}>Yo!</Text>
                <Text styles={styles.logoText} numberOfLines={1} adjustsFontSizeToFit>
                    Amazing chat
                </Text>
            </View>
            {children}
        </View>
    )
}
