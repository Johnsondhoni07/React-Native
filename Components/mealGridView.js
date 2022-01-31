import React from 'react';
import {
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const mealGridView = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onSelect}>
          <View style={styles.title}> 
        <Text>{props.title}</Text>
        </View>
        <View>
          <ImageBackground source={{uri: props.image}} style={styles.bgImage} />
        </View>

        <View style={styles.details}>
          <Text>Duration:{props.duration}m</Text>
          <Text>{props.complexity}</Text>
          <Text>{props.affordability}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default mealGridView;
const styles = StyleSheet.create({
    container:{
        // backgroundColor:'red',
        borderBottomWidth:2,
    },
  bgImage: {
    width: '100%',
    height: 180,
    justifyContent: 'flex-end',
  },
  details:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10
  },
  title:{
    flexDirection:'row',
    justifyContent:'center',
    padding:13
  }
});
