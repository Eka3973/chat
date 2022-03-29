import { StyleSheet } from 'react-native'
import { colors } from '../../../../assets/styles/colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.darkBlue,
    },
    logo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoText: {
        fontSize: 35,
        color: 'white',
        fontFamily: 'Pacifico-Regular',
    },
})
