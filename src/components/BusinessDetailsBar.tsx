import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {
  rating : number;
  reviesNumber: number;
  priceRate: string;
}

const BarElement = ( { value, title } : {value: number | string, title : string } ) => {
  return (
    <View style={styles.barElement}>
        <Text style={styles.value}>{value}</Text>
        <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const BusinessDetailsBar = ({
  rating,
  reviesNumber,
  priceRate,
} : Props) => {
  return (
    <View style={ styles.container }>
      <BarElement value={rating} title='Rating'/>
      <BarElement value={reviesNumber} title='Reviews'/>
      <BarElement value={priceRate} title='Price'/>
    </View>
  )
}

export default BusinessDetailsBar

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  barElement: {
    alignItems: 'center',
    borderColor: 'rgba(0,0,0,0.15)',
    borderWidth: 1,
    flex: 1,
    padding: 10
  },
  value: {
    fontSize: 20,
    fontWeight: '600'
  },
  title: {
    fontSize: 12,
  },
})