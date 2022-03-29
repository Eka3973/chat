import {useNavigation} from "@react-navigation/native";
import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import {routs} from "../../../navigation/routs";
import React from "react";

export const ChatsList = ({ name, avatar, lastMessage, time, id }) => {
    const navigation = useNavigation()
    return (
        <>
            <TouchableOpacity
                style={styles.block}
                onPress={() => navigation.navigate(routs.chat, { userId: id })}>
                <Image source={{ uri: avatar }} style={styles.image} />
                <View style={styles.content}>
                    <View style={styles.title}>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.name}>{time}</Text>
                    </View>
                    <Text style={styles.lastMessage}>{lastMessage}</Text>
                </View>
            </TouchableOpacity>
        </>
    )
}
