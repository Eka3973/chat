import {StyleSheet} from "react-native";
import {colors} from "../../../assets/styles/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: colors.white
    },
    interMessage: {
        flexDirection: 'row',
        marginHorizontal: 20,
        height: 40,
        borderWidth: 1,
        paddingLeft: 15,
        borderColor: colors.lightGrey,
        borderTopColor: colors.lightGrey,
        borderRadius: 50,
    },
    inputMessage: {
        flexGrow: 1,
    },
    comments: {},
    comment: {
        backgroundColor: colors.grey,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 5,
        padding: 10,
        width: '80%',
        marginLeft: 10,
        marginBottom: 10,
    },
    commentText: {
        color: '#475466',
    },
    sender: {
        alignSelf: "flex-end"
    },
    responder: {
        alignSelf: "flex-start",
    }

})
