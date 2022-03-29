import { StyleSheet } from 'react-native'
import { colors } from '../../../assets/styles/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  block: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 65,
    paddingLeft: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {},
  lastMessage: {},
  content: {
    marginLeft: 10,
    borderColor: '#AAAAAA5B',
    borderBottomWidth: 0.8,
    flexGrow: 1,
    height: '100%',
    justifyContent: 'center',
    paddingRight: 10,
  },
})
