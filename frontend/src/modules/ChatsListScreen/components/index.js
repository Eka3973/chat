import React, {useEffect, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {FlatList} from 'react-native'
import styles from './styles'
import Button from "../../../common/CustomButton";
import io from 'socket.io-client';
import {ChatsList} from "./ChatsList";


const DATA = [
  {
    id: '1bd7acbea-c1b1-46c2-aed5-3ad53abb28bda',
    name: 'First Item',
    avatar: 'https://via.placeholder.com/40.png',
    lastMessage: 'bla-bla-bla',
    time: '10:55',
  },
  {
    id: '2bd7asacbea-c1b1-46c2-aed5-3ad53abb28bda',
    name: 'First Item',
    avatar: 'https://via.placeholder.com/40.png',
    lastMessage: 'bla-bla-bla',
    time: 'пн',
  },
  {
    id: '3bd7asacaabea-c1b1-46c2-aed5-3ad53abb28bda',
    name: 'First Item',
    avatar: 'https://via.placeholder.com/40.png',
    lastMessage: 'bla-bla-bla',
    time: 'вчера',
  },
]



export const ChatsScreen = () => {
  const [socket, setSocket] = useState(null)

  useEffect(() => {
    const newSocket = io(`http://localhost:5000`)
    newSocket.on('message', msg=> {
      console.log(msg)
    })
    setSocket(newSocket);
    return () => newSocket.close();
  }, []);

  const sendMessage = () => {
    socket.emit('message', 'ggg')
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <ChatsList {...item} />}
        keyExtractor={item => item.id}
      />
      <Button
          label="SEND MESSAGE"
          onPress={sendMessage}
          // stylesButton={styles.button}
          // stylesButtonText={styles.buttonText}
      />
    </SafeAreaView>
  )
}
