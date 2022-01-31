import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const PlaceItem = props => {
  return (
    <TouchableOpacity onPress={props.onSelect} style={styles.PlaceItem}>
      <Image style={styles.image} source={{uri: props.image}} />
      <View style={styles.Text}>
        <Text>{props.title}</Text>
        <Text>{props.address}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlaceItem;
const styles = StyleSheet.create({
  PlaceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#ccc',
    borderWidth: 1,
  },
  Text: {
    marginLeft: 15,
  },
});
