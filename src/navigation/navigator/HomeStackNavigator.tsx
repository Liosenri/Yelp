import {createStackNavigator} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {TouchableOpacity, LayoutAnimation, StyleSheet} from 'react-native';
import {listModeContext} from '../../Providers/ListModeProvider';
import BusinessDetailsScreen from '../../screens/BusinessDetailsScreen';
import HomeScreen from '../../screens/HomeScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export type HomeStackNavigatorParamsList = {
  Home: undefined;
  BusinessDetails: {businessId: string};
};

const Stack = createStackNavigator<HomeStackNavigatorParamsList>();

export default function HomeStackNavigator() {
  const {listMode, setListMode} = useContext(listModeContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Inicio',
          headerRight: () => (
            <TouchableOpacity
              style={styles.listModeButton}
              onPress={() => {
                LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
                setListMode(listMode === 'list' ? 'map' : 'list');
              }}>
              <Icon
                size={30}
                name={listMode === 'list' ? 'map' : 'view-list'}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="BusinessDetails"
        component={BusinessDetailsScreen}
        options={{title: 'Detalles de negocio'}}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({listModeButton: {marginRight: 16}});
