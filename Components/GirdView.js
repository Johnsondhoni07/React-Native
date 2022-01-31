import React from 'react';
import {Text, View, TouchableHighlight, StyleSheet} from 'react-native';

const GirdView = props => {
  return (
    <View style={{...styles.GridView,...{backgroundColor:props.color}}}>
      <TouchableHighlight
        style={{flex: 1}}
        onPress={props.onSelect}>
        <View style={styles.Container}>
          <Text style={styles.gridView__Text}>{props.title}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default GirdView;
const styles = StyleSheet.create({
  GridView: {
    flex: 1,
    width: '100%',
    margin: 2,
    height: 150,
    borderRadius: 10,
  },
  Container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  gridView__Text:{
    fontWeight:'bold',
  }
});
