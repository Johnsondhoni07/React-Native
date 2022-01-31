import React from 'react';
import {Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import MapPreview from '../components/MapPreview';

const PlaceDetailScreen = props => {
  const route = useRoute()
  console.log(route.params.Data,'details');
  return <View>
    <Text>

    </Text>
    <MapPreview></MapPreview>
  </View>;
};

export const PlaceDetailsScreenOptions = props => {
  // const route = useRoute()
  return {
    headerTitle: props.route.params.headId,
  };
};

export default PlaceDetailScreen;
