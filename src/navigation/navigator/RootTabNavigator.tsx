import React, {useCallback, useContext, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './HomeStackNavigator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FavoritesStackNavigator from './FavoritesStackNavigator';
import {AppState} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {favoritesContext} from '../../Providers/FavoritesProvider';

const Tab = createBottomTabNavigator();

export default () => {
  const {favorites, setFavorites} = useContext(favoritesContext);

  const saveFavorites = useCallback(async () => {
    AsyncStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'background') {
        saveFavorites();
      }
    });
    return () => {
      subscription.remove();
    };
  }, [saveFavorites]);

  const loadFavorites = useCallback(async () => {
    const savedFavorites = await AsyncStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, [setFavorites]);

  useEffect(() => {
    loadFavorites();
  }, [loadFavorites]);

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        component={HomeStackNavigator}
        name="HomeStack"
        options={{
          tabBarIcon: props => <Icon {...props} name="food" />,
          title: 'Inicio',
        }}
      />
      <Tab.Screen
        component={FavoritesStackNavigator}
        name="FavoritsStack"
        options={{
          tabBarIcon: props => <Icon {...props} name="heart" />,
          title: 'Favoritos',
        }}
      />
    </Tab.Navigator>
  );
};
