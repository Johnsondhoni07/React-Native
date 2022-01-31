import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { mealsAction } from '../Store/mainSlice';

const MealsDetailScreen = () => {
  const availableMeals = useSelector(state => state.meals.meals);
  const route = useRoute();
  const catId = route.params.id;
  const selectedMeal = availableMeals.find(meal => meal.id === catId);
  const ListDetails = (props) => {
    return (
      <View style={styles.listDetail}>
        <Text>{props.children}</Text>
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={styles.titleHead}>
        <Text style={{textAlign: 'center'}}>{selectedMeal.title}</Text>
      </View>
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
      <View style={styles.detail}>
        <Text>Duration:{selectedMeal.duration}m</Text>
        <Text>{selectedMeal.affordability}</Text>
        <Text>{selectedMeal.complexity}</Text>
      </View>
      <View style={styles.titleHead}>
        <Text>Ingredients</Text>
      </View>
      {selectedMeal.ingredients.map((ingredients, i) => (
        <ListDetails key={i}>{ingredients}</ListDetails>
      ))}

      <View style={styles.titleHead}>
        <Text>STEPS TO BE DONE</Text>
      </View>
      {selectedMeal.steps.map((steps, i) => (
        <ListDetails key={i}>{steps}</ListDetails>
      ))}
    </ScrollView>
  );
  
};
export const mealDetailScreenOptions = (props) => {
  const mealId = props.route.params.id
  const dispatch = useDispatch()
  
  const onPressFav = () => {
    dispatch(mealsAction.addFav(mealId))
  }
  
  return {
    headerRight: () => (
      <TouchableWithoutFeedback onPress={onPressFav}>
        <Ionicons name="star" size={20} color="#000000" />
      </TouchableWithoutFeedback>
    ),
  };
};

export default MealsDetailScreen;
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 180,
  },
  titleHead: {
    backgroundColor: '#c68642',
    padding: 5,
  },
  detail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listDetail: {
    marginVertical: 5,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
});
