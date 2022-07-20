import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeStackNavigator from './src/navigation/navigator/HomeStackNavigator';

type Props = {};

const App = ({}: Props) => {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
