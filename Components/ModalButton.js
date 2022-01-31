import React, {useState} from 'react';
import {
  View,
  Modal,
  Text,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {RadioButton} from 'react-native-paper';

const ModalButton = ({setData}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [tempFname, settempFname] = useState('');
  const [tempLname, settempLname] = useState('');
  const [tempGender, settempGender] = useState('Male');

  const modalButtonHandler = () => {
    setModalVisible(true);
    console.log('Button Clicked');
  };
  const onChangeFnameHandler = text => {
    console.log(text);
    settempFname(text);
  };
  const onChangeLnameHandler = text => {
    console.log(text);
    settempLname(text);
  };
  const inputAddHandler = () => {
    console.log('input Add');
    setData(old => [
      ...old,
      {key: Date.now(), FName: tempFname, LName: tempLname, Gender: tempGender},
    ]);
    settempFname('');
    settempLname('');
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.input}
              value={tempFname}
              onChangeText={onChangeFnameHandler}
              placeholder="Enter the First Name"
            />
            <TextInput
              style={styles.input}
              value={tempLname}
              onChangeText={onChangeLnameHandler}
              placeholder="Enter the last Name"
            />
            <View style={styles.modal_RadioButton}>
              <RadioButton
                value="Male"
                status={tempGender === 'Male' ? 'checked' : 'unchecked'}
                onPress={() => settempGender('Male')}
              />
              <Text style={styles.modal_RadioButton_Text}>Male</Text>

              <RadioButton
                value="Female"
                status={tempGender === 'Female' ? 'checked' : 'unchecked'}
                onPress={() => settempGender('Female')}
              />
              <Text style={styles.modal_RadioButton_Text}>Female</Text>
            </View>
            <View style={styles.modal_Button_wrap}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.textStyle}>Hide</Text>
              </Pressable>
              <Pressable
                disabled={tempFname.length > 0 ? false : true}
                style={[styles.button, styles.buttonClose]}
                onPress={inputAddHandler}>
                <Text style={styles.textStyle}>Add</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={styles.modal_Button}
        onPress={modalButtonHandler}
        activeOpacity={0.7}>
        <Text style={styles.modal_Button_Text}>Modal</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ModalButton;
const styles = StyleSheet.create({
  modal_Button: {
    width: '100%',
    backgroundColor: 'red',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  modal_Button_Text: {
    color: 'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 5,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    maxWidth: '75%',
    minWidth: '75%',
    padding: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modal_Button_wrap: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 7,
    width: '75%',
    justifyContent: 'space-evenly',
  },
  modal_RadioButton: {
    flexDirection: 'row',
  },
  modal_RadioButton_Text: {
    marginVertical: 7,
  },
});
