import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TimeIcon from '../icons/TimeIcon';
import { Hours } from '../types';

type Props = {
  isClosed : boolean;
  hours: Hours[];
}

const converHourToString = (fullhour: string) : string => {
  const left = fullhour.substring(0,2)
  const right = fullhour.substring(2)
  return `${left}:${right}`
}

const converDayNumberToDayAbv = (day : number) : string => {
  switch(day) {
    case 0 :
      return 'mon.'
    case 1 :
      return 'tue.'
    case 2 :
      return 'wed.'
    case 3 :
      return 'thu.'
    case 4 :
      return 'fri.'
    case 5 :
      return 'sat.'
    case 6 :
      return 'sun.'
  }
  return ''
}

const BusinessHours = ( { isClosed, hours } : Props ) => {
  const filteredHours = hours[0].open
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <TimeIcon />
        <Text style={styles.titleText}> Hours</Text>
      </View>
      <Text style={[
        styles.status,
        isClosed ? styles.isClosed : styles.isOpen
      ]}>{ isClosed ? 'Closed' : 'Open Now'}</Text>
      { filteredHours.map(hour => (
        <Text key={hour.day} style={styles.hour}>
          {converHourToString(hour.start)} - {converHourToString(hour.end)} {converDayNumberToDayAbv(hour.day)}
        </Text>
      )) }
    </View>
  )
}

export default BusinessHours

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  title: {
    alignItems:'center',
    flexDirection: 'row',
  },
  titleText: {
    fontSize: 15,
  },
  status: {
    fontSize: 25,
    fontWeight: '600',
    marginTop: 5,
    marginBottom: 5,
  },
  isClosed: {
    color: '#ef233c',
  },
  isOpen: {
    color: '#f48c06',
  },
  hour: {
    fontSize: 12,
  },
})