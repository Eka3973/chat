import { TouchableOpacity } from 'react-native'
import Text from '../CustomText'
import React from 'react'

const CustomButton = ({ onPress, label, stylesButton, stylesButtonText, disabled }) => {
  return (
    <TouchableOpacity style={stylesButton} onPress={onPress} disabled={disabled}>
      <Text style={stylesButtonText}>{label}</Text>
    </TouchableOpacity>
  )
}
export default CustomButton
