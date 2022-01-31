import React from 'react';
import {Provider} from 'react-redux';
import MainNavigation from './Navigation/MainNavigation';
import store from './Store';
const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};
export default App;
