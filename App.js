import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import Header from './Components/Header';
import Toggle from './Components/Toggle';
import ModalButton from './Components/ModalButton';
import Theme from './Components/Flatlist';
const App = () => {
  const [Data, setData] = useState([]);
  const [DarkTheme, setDarkTheme] = useState(false);
  console.log(Data);

  return (
    <ScrollView>
      <Header />
      <ModalButton setData={setData} />
      <Toggle setDarkTheme={setDarkTheme} />
      <Theme Data={Data} DarkTheme={DarkTheme} />
    </ScrollView>
  );
};

export default App;
