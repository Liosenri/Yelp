import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import {Business} from '../types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {favoritesContext} from '../Providers/FavoritesProvider';

type Props = {
  business: Business;
  onPress?: (businessId: string) => void;
};

const BusinessItem = ({business, onPress}: Props) => {
  const {
    name,
    image_url,
    location: {display_address},
    id,
  } = business;
  const {addFavorite, favorites, removeFavorite} = useContext(favoritesContext);
  const isInFavorites = favorites.some(f => f.id === id);
  const hanldeOnPress = () => onPress && onPress(id);
  const onPressHeartIcon = () =>
    isInFavorites ? removeFavorite(business) : addFavorite(business);

  return (
    <TouchableOpacity
      disabled={onPress === undefined}
      onPress={hanldeOnPress}
      style={styles.containverView}>
      <Image style={styles.businessImage} source={{uri: image_url}} />
      <View style={styles.textContainerView}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.addressText}>
          {display_address.map(text => text)}
        </Text>
      </View>
      <TouchableOpacity
        hitSlop={{bottom: 10, left: 10, right: 10, top: 10}}
        onPress={onPressHeartIcon}>
        <Icon name="heart" size={20} color={isInFavorites ? 'red' : 'gray'} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default BusinessItem;

const styles = StyleSheet.create({
  containverView: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  businessImage: {width: 50, height: 50, borderRadius: 10, marginRight: 8},
  nameText: {fontSize: 16, fontWeight: 'bold'},
  addressText: {fontSize: 11, fontWeight: 'bold', color: '#666'},
  textContainerView: {flex: 1},
});
