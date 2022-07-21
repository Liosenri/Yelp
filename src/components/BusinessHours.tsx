import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {
  isClosed : boolean;
}

const BusinessHours = ( {isClosed} : Props ) => {
  return (
    <View>
      <Text>{ isClosed ? 'Is Closed' : 'Open Now'}</Text>
    </View>
  )
}

export default BusinessHours

const styles = StyleSheet.create({})