import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import FavoritesScreen from '../../screens/FavoritesScreen';

export type FavoritesStackNavigatorParamsList = {
  Favorites: undefined;
};

const Stack = createStackNavigator<FavoritesStackNavigatorParamsList>();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Favorites"
      component={FavoritesScreen}
      options={{
        title: 'Favoritos',
      }}
    />
  </Stack.Navigator>
);
