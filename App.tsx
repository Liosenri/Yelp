import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeStackNavigator from './src/navigation/navigator/HomeStackNavigator';
import {ListModeProvider} from './src/Providers/ListModeProvider';

type Props = {};

const App = ({}: Props) => {
  return (
    <NavigationContainer>
      <ListModeProvider>
        <HomeStackNavigator />
      </ListModeProvider>
    </NavigationContainer>
  );
};

export default App;
