import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Flatlist = ({Data, DarkTheme}) => {
  return Data.map((e, i) => (
    <TouchableOpacity >
      <View
        style={!DarkTheme ? styles.flat_Data_Light : styles.flat_Data_Dark}
        key={i}>
        <Text>
          Name: {e.FName} {e.LName}
        </Text>
        <Text>Gender : {e.Gender}</Text>
      </View>
    </TouchableOpacity>
  ));
};

export default Flatlist;
const styles = StyleSheet.create({
  flat_Data_Light: {
    width: '100%',

    padding: 5,
    marginVertical: 5,
    backgroundColor: '#dfe3ee',
  },
  flat_Data_Dark: {
    width: '100%',
    padding: 5,
    marginVertical: 5,
    backgroundColor: '#3b5998',
    color: '#f7f7f7',
  },
});
