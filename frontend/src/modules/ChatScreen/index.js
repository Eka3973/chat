import React from 'react'
import { Text, View } from 'react-native'
import { useRoute } from '@react-navigation/native'

export const ChatScreen = () => {
  const { userId } = useRoute().params
  return (
    <View>
      <Text>{userId}</Text>
    </View>
  )
}
