import mainSlice from './slice';
import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {main: mainSlice.reducer},
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

export default store;
