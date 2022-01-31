import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {mainAction} from '../store/slice';
import ImagePicker from '../components/ImagePicker';
import LocationPicker from '../components/LocationPicker';

const NewPlaceScreen = props => {
  const [title, setTitle] = useState();
  const [selectImage, setSelectedImage] = useState('');
  const [location,setLocation] = useState([]);
  const dispatch = useDispatch();
  const titleChangehandler = text => {
    setTitle(text);
  };
  const titleSubmitHandler = () => {
    dispatch(mainAction.addPlace({title: title, image: selectImage,locate:location }));
    setTitle('');
    props.navigation.goBack();
  };

  return (
    <View style={styles.newPlace__Overview}>
      <Text>Title</Text>
      <TextInput
        style={styles.newPlace__TextInput}
        onChangeText={titleChangehandler}
        value={title}
      />
      <ImagePicker setSelectedImage={setSelectedImage} />
      <Button
        title="Submit"
        style={styles.newPlace__Button}
        onPress={titleSubmitHandler}
      />
      <LocationPicker setLocation={setLocation}/>
    </View>
  );
};

export default NewPlaceScreen;
const styles = StyleSheet.create({
  newPlace__TextInput: {
    // marginHorizontal: 10,
    marginVertical: 9,
    borderColor: 'black',
    borderWidth: 2,
  },
  newPlace__Overview: {
    marginHorizontal: 10,
  },
  newPlace__Button: {
    marginVertical: 10,
  },
});
