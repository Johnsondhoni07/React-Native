import MapView from 'react-native-maps';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MapPreview = () => {
  return (
    <MapView
      style={styles.Map__Container}
      region={{
        latitude: 37.78,
        longitude: -122.43,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}></MapView>
  );
};

export default MapPreview;
const styles = StyleSheet.create({
  Map__Container: {
    width: '100%',
    height: '100%',
  },
});
