import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Business} from '../types';

type Props = {
  business: Business;
  onPress: (businessId: string) => void;
};

const BusinessItem = ({
  business: {
    name,
    image_url,
    location: {display_address},
    id,
  },
  onPress,
}: Props) => {
  const hanldeOnPress = () => onPress(id);

  return (
    <TouchableOpacity onPress={hanldeOnPress} style={styles.containverView}>
      <Image style={styles.businessImage} source={{uri: image_url}} />
      <View style={styles.textContainerView}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.addressText}>
          {display_address.map(text => text)}
        </Text>
      </View>
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
