import {StyleSheet, View} from 'react-native';
import React, {useContext, useState} from 'react';
import SearchBar from '../components/SearchBar';
import BusinessList from '../components/BusinessList';
import LoadingView from '../components/LoadingView';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeStackNavigatorParamsList} from '../navigation/navigator/HomeStackNavigator';
import MapView, {Marker} from 'react-native-maps';
import {listModeContext} from '../Providers/ListModeProvider';
import {useSelector} from 'react-redux';
import {AppState, useAppDispatch} from '../store';
import {fetchBusinessesByCoordinatesAction} from '../store/slices/businessesSlices';

type Props = {
  navigation: StackNavigationProp<HomeStackNavigatorParamsList, 'Home'>;
};

const HomeScreen = ({navigation}: Props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const {listMode} = useContext(listModeContext);

  const {businesses, isLoading} = useSelector(
    (state: AppState) => state.businesses,
  );
  const dispatch = useAppDispatch();

  const handleOnEndEditing = () =>
    dispatch(
      fetchBusinessesByCoordinatesAction({
        term: searchQuery,
        coordinates: {latitude: 19.433664932, longitude: -99.137666116},
      }),
    );

  const onPressbusinessItem = (businessId: string) =>
    navigation.navigate('BusinessDetails', {businessId});

  return (
    <View style={styles.containerView}>
      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        onEndEditing={handleOnEndEditing}
      />
      {isLoading ? (
        <LoadingView text="Cargando negocios" />
      ) : listMode === 'list' ? (
        <BusinessList
          businnesses={businesses}
          onPressItem={onPressbusinessItem}
        />
      ) : (
        <MapView
          initialRegion={{
            latitude: 19.433664932,
            longitude: -99.137666116,
            latitudeDelta: 0.002,
            longitudeDelta: 0.002,
          }}
          style={styles.mapView}>
          {businesses?.map(({coordinates, name, rating, is_closed, id}) => (
            <Marker
              key={id}
              title={name}
              description={'Rating : ' + rating}
              coordinate={coordinates}
              pinColor={is_closed ? 'red' : 'green'}
              onCalloutPress={() => onPressbusinessItem(id)}
            />
          ))}
        </MapView>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  containerView: {flex: 1},
  mapView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
});
