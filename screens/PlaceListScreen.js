import React from 'react';
import {Button, FlatList, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import PlaceItem from '../components/PlaceItem';

const PlaceListScreen = props => {
  const places = useSelector(state => state.main.places);
  console.log(places);
  const render = itemData => (
    <PlaceItem
      title={itemData.item.title}
      address={itemData.item.id}
      image={itemData.item.imageUri}
      onSelect={() => {
        props.navigation.navigate('PlaceDetails', {
          headId: itemData.item.title,
          Data: itemData.item,
        });
      }}
    />
  );
  return (
    <FlatList
      data={places}
      keyExtractor={item => item.id}
      renderItem={render}
    />
  );
};

export const PlaceListScreenOptions = props => {
  //   console.log(props);
  const addnavigator = () => {
    props.navigation.navigate('NewPlace');
  };

  return {
    headerRight: () => (
      <TouchableOpacity onPress={addnavigator}>
        <Ionicons name="add" size={25} color="#000000" />
      </TouchableOpacity>
    ),
  };
};

export default PlaceListScreen;
