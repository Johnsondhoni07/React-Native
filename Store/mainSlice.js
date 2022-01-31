import {createSlice} from '@reduxjs/toolkit';
import {MEALS} from '../Data/dummy_data';

const mainSlice = createSlice({
  name: 'Meals',
  initialState: {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [],
  },
  reducers: {
    addFav(state, action) {
      const favId = action.payload;
      const favMeals = state.meals.find((meal)=>meal.id === favId)   
    
      const isFav = state.favoriteMeals.some(meal=>meal.Id === favId)
      console.log(isFav);
      if(isFav){
        console.log(true)
      }
      else{
        state.favoriteMeals.push(favMeals);
      }
    },
  },
});

export const mealsAction = mainSlice.actions;
export default mainSlice;
