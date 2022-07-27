import {StyleSheet, View} from 'react-native';
import React, {useContext} from 'react';
import {favoritesContext} from '../Providers/FavoritesProvider';
import BusinessList from '../components/BusinessList';

type Props = {};

const FavoritesScreen = ({}: Props) => {
  const {favorites} = useContext(favoritesContext);
  return (
    <View style={styles.container}>
      <BusinessList businnesses={favorites} />
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
});
