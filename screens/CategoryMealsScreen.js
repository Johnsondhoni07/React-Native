import {useRoute} from '@react-navigation/native';
import React from 'react';
import {
  Button,
  FlatList,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useSelector} from 'react-redux';
import MealGridView from '../Components/mealGridView';

const CategoryMealsScreen = props => {
  const route = useRoute();
  const catId = route.params.categoryId;

  const availableMeals = useSelector(state => state.meals.meals);

  const displayMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0,
  );
  const GridView = itemData => {
    return (
      <MealGridView
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        image={itemData.item.imageUrl}
        affordability={itemData.item.affordability}
        onSelect={()=> props.navigation.navigate('MealsDetails',{
          id:itemData.item.id
        })}
        />
    );
  };
  return (
    <View>
      <FlatList
        data={displayMeals}
        renderItem={GridView}
        keyExtractor={(item, index) => item.id}
        style={{width: '100%'}}
      />
    </View>
  );
};

export default CategoryMealsScreen;

