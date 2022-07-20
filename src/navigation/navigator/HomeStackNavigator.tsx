import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import BusinessDetailsScreen from '../../screens/BusinessDetailsScreen';
import HomeScreen from '../../screens/HomeScreen';

export type HomeStackNavigatorParamsList = {
  Home: undefined;
  BusinessDetails: {businessId: string};
};

const Stack = createStackNavigator<HomeStackNavigatorParamsList>();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Inicio'}}
      />
      <Stack.Screen
        name="BusinessDetails"
        component={BusinessDetailsScreen}
        options={{title: 'Detalles de negocio'}}
      />
    </Stack.Navigator>
  );
}
