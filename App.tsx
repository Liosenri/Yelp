import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ListModeProvider} from './src/Providers/ListModeProvider';
import RootTabNavigator from './src/navigation/navigator/RootTabNavigator';
import {FavoritesProvider} from './src/Providers/FavoritesProvider';

type Props = {};

const App = ({}: Props) => {
  return (
    <NavigationContainer>
      <FavoritesProvider>
        <ListModeProvider>
          <RootTabNavigator />
        </ListModeProvider>
      </FavoritesProvider>
    </NavigationContainer>
  );
};

export default App;
