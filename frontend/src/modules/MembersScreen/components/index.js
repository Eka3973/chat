import React, {useEffect, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {FlatList} from 'react-native'
import styles from './styles'
import Button from "../../../common/CustomButton"
import {MembersList} from "./MembersList";
import {getMembers, getUser, getUserId} from "../selectors"
import {useDispatch, useSelector} from "react-redux"
import * as actions from "../actions"
import {socketConnect, socketDisconnect} from "../../../sockets/actions"



export const MembersScreen = () => {
  const dispatch = useDispatch()
  const {id} = useSelector(getUser)
  const members = useSelector(getMembers)

  useEffect(()=> {
    dispatch(actions.getMembers({id}))

  }, [])

  useEffect(() => {
    dispatch(socketConnect())
    // // socket.auth = { roomId: id }
    // socket.connect()
    return ()=> {
         dispatch(socketDisconnect())
    }
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={members}
        renderItem={({ item }) => <MembersList user = {item} />}
        keyExtractor={item => item._id}
      />
    </SafeAreaView>
  )
}
