import React from 'react';
import { Text ,View ,FlatList} from 'react-native';
import { useSelector } from 'react-redux';
import MealGridView from '../Components/mealGridView';

const FavoritesScreen = () => {

    const favSelected = useSelector((state)=>state.meals.favoriteMeals)
    console.log(favSelected);
    
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
          data={favSelected}
          renderItem={GridView}
          keyExtractor={(item, index) => item.id}
          style={{width: '100%'}}
        />
      </View>
    );
};

export default FavoritesScreen;