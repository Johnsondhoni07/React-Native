import React from 'react';
import {
  Button,
  View,
  ScrollView,
  StyleSheet,
  PermissionsAndroid,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {Permission} from 'react-native-permissions';
const LocationPicker = ({setLocation}) => {
  const getLocationHandler = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Permissions',
          message: 'Needs Location permission',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'No',
          buttonPositive: 'Ok',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          position => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          error => {
            console.log(error.message, error.code);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      } else {
        console.log('You cant Use');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.view}>
        <Button title="Get Location" onPress={getLocationHandler} />
      </View>
    </ScrollView>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginHorizontal: 10,
  },
  view: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
