import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ListModeProvider} from './src/Providers/ListModeProvider';
import RootTabNavigator from './src/navigation/navigator/RootTabNavigator';
import {FavoritesProvider} from './src/Providers/FavoritesProvider';
import {Provider as ReduxProvider} from 'react-redux';
import store from './src/store';

type Props = {};

const App = ({}: Props) => {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <FavoritesProvider>
          <ListModeProvider>
            <RootTabNavigator />
          </ListModeProvider>
        </FavoritesProvider>
      </NavigationContainer>
    </ReduxProvider>
  );
};

export default App;
