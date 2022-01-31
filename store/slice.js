import {createSlice} from '@reduxjs/toolkit';
import place from '../models/place';
const mainSlice = createSlice({
  name: 'map',
  initialState: {
    places: [],
  },
  reducers: {
    addPlace(state, action) {
      const newPlace = new place(
        Date.now(),
        action.payload.title,
        action.payload.image,
        action.payload.locate.latitude,
        action.payload.locate.longitude,
      );
      state.places = state.places.concat(newPlace);
    },
  },
});

export const mainAction = mainSlice.actions;
export default mainSlice;
