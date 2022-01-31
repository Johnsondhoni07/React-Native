import React, {useState} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {launchCamera, LaunchImageLibrary} from 'react-native-image-picker';
('react-native-image-picker');

const ImagePicker = ({setSelectedImage}) => {
  const [pickedImage, SetPickedImage] = useState(
    'https://www.chennaisuperkings.com/CSK_WEB/images/Final_lions.jpg',
  );

  const takeImagehandler = async () => {
    const image = await launchCamera({
      storageOptons: {path: 'images', mediaType: 'photo'},
    });
    const strImage = image.assets.map(e => e.uri).shift();

    SetPickedImage(strImage);
    setSelectedImage(strImage);
  };
  return (
    <View style={styles.imagePicker}>
      <View style={styles.imagePreview}>
        {/* <Text>No Image Found</Text> */}
        <Image style={styles.image} source={{uri: pickedImage}} />
      </View>
      <Button title="Take A Image" onPress={takeImagehandler} />
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: 'center',
  },
  imagePreview: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    // marginHorizontal:10,
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
