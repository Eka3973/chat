import {StyleSheet} from 'react-native'
import {colors} from '../../../../assets/styles/colors'

export default StyleSheet.create({
    auth: {
        flex: 1,
        alignItems: 'center',
    },
    input: {
        width: 250,
        height: 40,
        borderWidth: 1,
        paddingLeft: 15,
        backgroundColor: colors.extraLightBlue,
        borderRadius: 3,
        borderColor: colors.darkBlue,
        marginTop: 10,
    },
    errorText: {
        color: 'red',
        width: 250,
        paddingTop: 10,
        paddingBottom: 10,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 250,
        backgroundColor: '#5096b1',
        marginTop: 20,
        borderRadius: 3,
    },
    buttonText: {
        color: 'white',
    },
    loginLink: {
        fontSize: 16,
        color: colors.green,
        marginTop: 20,
        textDecorationLine: 'underline',
    }
})
