import {useNavigation} from "@react-navigation/native";
import {Image, TouchableOpacity, View} from "react-native";
import Text from '../../../common/CustomText'
import styles from "./styles";
import {routs} from "../../../navigation/routs";
import React from "react";
import {useDispatch, useSelector} from "react-redux"
import * as actions from '../actions'
import {getMessages} from '../../MessagesScreen/actions'


import {getUser} from "../selectors";


export const MembersList = ({ user }) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const {id} = useSelector(getUser)

    const {userName, avatar,  _id} = user

    const setMember = () => {
        dispatch(actions.setMember({...user}))
        navigation.navigate(routs.messages, { userName })
    }
    return (
        <>
            <TouchableOpacity
                style={styles.block}
                onPress={setMember}>
                <Image source={{ uri: 'https://via.placeholder.com/40.png' }} style={styles.image} />
                <View style={styles.content}>
                    <View style={styles.title}>
                        <Text style={styles.name}>{userName}</Text>
                        <Text style={styles.name}>12:30</Text>
                    </View>
                    <Text style={styles.lastMessage}>last message</Text>
                </View>
            </TouchableOpacity>
        </>
    )
}
