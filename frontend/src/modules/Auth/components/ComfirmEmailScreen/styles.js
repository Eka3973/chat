import {StyleSheet} from 'react-native'
import {colors} from '../../../../assets/styles/colors'

export default StyleSheet.create({
    container: {
        flex: 1.5,
        alignItems: 'center',
        paddingHorizontal: 40,
    },
    text: {
        textAlign: "center",
        color: colors.white,
        fontSize: 20,
        paddingBottom: 20,
        marginBottom: 10,
    },
    button: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.green,
        padding: 8,
        marginBottom: 35,
    },
    buttonText: {
        color: colors.green,
        fontSize: 16,
    },
    line: {
        borderWidth: 1,
        width: 100,
        borderColor: colors.white,
        marginBottom: 10,
    }
})
