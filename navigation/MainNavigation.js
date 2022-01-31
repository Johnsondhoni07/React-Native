import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MapScreen from '../screens/MapScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';
import PlaceListScreen from '../screens/PlaceListScreen';
import NewPlaceScreen from '../screens/NewPlaceScreen';
import { PlaceListScreenOptions } from '../screens/PlaceListScreen';
import { PlaceDetailsScreenOptions } from '../screens/PlaceDetailScreen';
const MainNavigation = () => {
  const stack = createStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Places" component={PlaceListScreen} options={PlaceListScreenOptions} />
        <stack.Screen name="PlaceDetails" component={PlaceDetailScreen} options={PlaceDetailsScreenOptions }/>
        <stack.Screen name="NewPlace" component={NewPlaceScreen} />
        <stack.Screen name="Map" component={MapScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
