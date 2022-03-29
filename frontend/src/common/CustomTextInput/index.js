import { Text } from 'react-native'
import React from 'react'

const CustomText = ({ children, styles }) => {
  return <Text style={styles}>{children}</Text>
}
export default CustomText
