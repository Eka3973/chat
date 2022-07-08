import React, {useEffect, useLayoutEffect, useState} from 'react'
import {Image,  TouchableOpacity, View} from 'react-native'
import Text from '../../../common/CustomText'
import {useRoute} from '@react-navigation/native'
import TextInput from "../../../common/CustomInput"
import styles from "./styles"
import {SafeAreaView} from 'react-native-safe-area-context'
import {colors} from "../../../assets/styles/colors"
import * as actions from "../actions"
import {useDispatch, useSelector} from "react-redux"
import {getMember, getMessages, getUserId} from "../selectors"
import {useNavigation} from "@react-navigation/native"





export const MessagesScreen = () => {
    const {userName, _id} = useSelector(getMember)
    const userId = useSelector(getUserId)
    const chat = useSelector(getMessages)
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [comment, setComment] = useState('')
    const [messages, setMessage] = useState([])


    useEffect(()=> {
        dispatch(actions.getMessages({from: userId, to: _id}))
        setMessage(chat)
    }, [chat])


    const handleChange = (text) => {
        setComment(text)
    }
    const sendMessage = () => {
        // dispatch(actions.addMessage({from: userId, to: _id, message: comment }))
        // socket.emit('message:add', {from: userId, to: _id, message: comment })
        // socket.on('message:set', msg=> {
        //     setMessage([...messages, msg])
        // })

        setComment('')
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.comments}>
                {messages.map(message => (
                    <View style={[styles.comment, message.fromSelf ? styles.sender : styles.responder]} key={message.id}>
                        <Text style={styles.commentText}>
                            {message.message}
                        </Text>
                    </View>
                ))
                }
            </View>
            <View style={styles.interMessage}>
                <TextInput
                    styles={styles.inputMessage}
                    selectionColor={colors.lightGrey}
                    handleChange={handleChange}
                    value={comment}
                />
                {comment ?
                    <TouchableOpacity onPress={sendMessage}>
                        <Image source={require('../../../assets/icons/sent.png')}/>
                    </TouchableOpacity>
                    : null}

            </View>
        </SafeAreaView>


    )
}
