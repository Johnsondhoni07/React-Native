import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

const Toggle = ({setDarkTheme }) => {
  const lightThemeHandler = () => {
    console.log('Light Clicked');
    setDarkTheme(false);
  };
  const darkThemeHandler = () => {
    console.log('Dark Clicked');
    setDarkTheme(true);
  };

  return (
    <View style={styles.toggle_Container}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.toggle_Button}
        onPress={lightThemeHandler}>
        <Text style={styles.toggle_text}>Light</Text>
      </TouchableOpacity>
      <TouchableHighlight
        style={styles.toggle_Button}
        onPress={darkThemeHandler}
        underlayColor={'red'}>
        <Text style={styles.toggle_text}>Dark</Text>
      </TouchableHighlight>
    </View>
  );
};
export default Toggle;
const styles = StyleSheet.create({
  toggle_Container: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#8b9dc3',
  },
  toggle_Button: {
    flex: 1,
    padding: 20,
    // justifyContent: 'space-around',
    textAlign: 'center',
  },
  toggle_text: {
    fontSize: 20,
    textAlign:'center'
  },
});
