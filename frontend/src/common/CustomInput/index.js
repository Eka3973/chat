import {TextInput} from 'react-native'
import React from 'react'

const CustomTextInput = ({handleChange, name, placeholder, placeholderTextColor, styles, value, selectionColor}) => {
    return (
        <TextInput
            style={styles}
            onChangeText={(text) => handleChange(text, name)}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            name={name}
            value={value}
            selectionColor={selectionColor}
        />
    )
}
export default CustomTextInput
