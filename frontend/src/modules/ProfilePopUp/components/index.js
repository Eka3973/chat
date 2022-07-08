import {Modal, TouchableOpacity, View} from 'react-native'
import Text from '../../../common/CustomText'
import {MoreVertical} from 'react-native-feather'
import React, {useCallback, useState} from 'react'
import styles from './styles'
import Button from '../../../common/CustomButton'
import {SafeAreaView} from 'react-native-safe-area-context'
import {useNavigation} from '@react-navigation/native'
import {routs} from '../../../navigation/routs'
import {useDispatch} from "react-redux";
import * as actions from "../../Auth/actions";

const modalItems = [
  {
    id: 1,
    text: 'Setting',
    rout: routs.setting,
  },
]

export const ProfilePopUp = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const navigate = useNavigation()
  const dispatch = useDispatch();

  const handleModalItem = rout => {
    setModalVisible(false)
    navigate.navigate(rout)
  }

  const logout = useCallback(() => {
    setModalVisible(false)
    dispatch(actions.logout())
  }, [])

  return (
    <>
      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <TouchableOpacity style={styles.popUpContainer} onPress={() => setModalVisible(false)}>
          <SafeAreaView>
            <View style={styles.popUp}>
              {modalItems.map(modalItem => (
                <TouchableOpacity
                  key={modalItem.id}
                  style={{ marginVertical: 50 }}
                  onPress={() => handleModalItem(modalItem.rout)}>
                  <Text style={styles.popUpText}>{modalItem.text}</Text>
                </TouchableOpacity>
              ))}
              <Button label="LOG OUT" onPress={logout} />
            </View>
          </SafeAreaView>
        </TouchableOpacity>
      </Modal>
      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <MoreVertical stroke="red" strokeWidth={2} width={24} height={24} />
      </TouchableOpacity>
    </>
  )
}
