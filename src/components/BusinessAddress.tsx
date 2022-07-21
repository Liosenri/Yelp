import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Location } from '../types';
import LocationIcon from '../icons/LocationIcon';

type Props = {
  location: Location
}

const BusinessAddress = ({ location } : Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <LocationIcon />
        <Text style={styles.titleText}> Address</Text>
      </View>
      <Text style={styles.address}>{ location.city }, {location.address1}</Text>
    </View>
  )
}

export default BusinessAddress

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingTop: 0,
  },
  title: {
    alignItems:'center',
    flexDirection: 'row',
  },
  titleText: {
    fontSize: 15,
  },
  address:{
    marginTop: 5,
    fontSize: 25,
  },
})