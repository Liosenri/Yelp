import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import StarIcon from '../icons/StarIcon';

type Props = {
  rating : number;
  reviesNumber: number;
  priceRate: string;
}

const BarElement = ( { value, title, icon = '' } : {value: number | string, title : string, icon?: 'star' | '' } ) => {
  return (
    <View style={styles.barElement} >
        <View style={styles.valueContainer} >
          <Text style={styles.value}>{value} </Text>
          {icon==='star' && <StarIcon />}
        </View>
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
      <BarElement value={rating} title='Rating' icon='star'/>
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
  title: {
    fontSize: 12,
  },
  valueContainer:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    fontSize: 20,
    fontWeight: '600',
  },
})