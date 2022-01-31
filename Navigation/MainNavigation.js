import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CategoryScreen from '../screens/CategoryScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealsDetailScreen from '../screens/MealsDetailScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavoriteTabScreen from '../screens/FavoritesScreen';
import FilterTabScreen from '../screens/FilterScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { mealDetailScreenOptions } from '../screens/MealsDetailScreen';

const CategoryStack = createStackNavigator();
const mainstack = () => {
  return (
    <CategoryStack.Navigator>
      <CategoryStack.Screen name="Category" component={CategoryScreen} />
      <CategoryStack.Screen
        name="MealsCategory"
        component={CategoryMealsScreen}
      />
      <CategoryStack.Screen name="MealsDetails" component={MealsDetailScreen} options={mealDetailScreenOptions}/>
    </CategoryStack.Navigator>
  );
};

const tabNav = createBottomTabNavigator();
const MainNavigation = () => {
  return (
    <NavigationContainer>
      <tabNav.Navigator
        // FOR ICONS

        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Stack') {
              iconName = focused ? 'restaurant' : 'restaurant-outline';
            } else if (route.name === 'Favorites') {
              iconName = focused ? 'star' : 'star-outline';
            } else {
              iconName = focused ? 'filter' : 'filter-outline';
            }
            return (
              <Ionicons name={iconName} color="#000000" size={20}></Ionicons>
            );
          },
          tabBarActiveTintColor: '#000000',
          tabBarInactiveTintColor: 'gray',
          tabBarActiveBackgroundColor: '#FF8970',
          tabBarShowLabel: false,
        })}

        //For ICONS
      >
        <tabNav.Screen
          name="Stack"
          component={mainstack}
          options={{
            headerShown: false,
          }}
        />
        <tabNav.Screen
          name="Favorites"
          component={FavoriteTabScreen}
          // options={{tabBarIcon:<Ionicons name={({focused})=>focused?'add':'add-outline'} size={20} color='#000000'></Ionicons>}}
        />
        <tabNav.Screen name="Filters" component={FilterTabScreen} />
      </tabNav.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigation;
