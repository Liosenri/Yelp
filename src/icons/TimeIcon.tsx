import { Image, ImageStyle, StyleProp } from 'react-native'
import React from 'react'

type Props = {
  style?: StyleProp<ImageStyle>
}

const TimeIcon = ({ style }: Props) => {
  return (
    <Image source={require('../assets/time.png')} style={{width:15, height:15}}/>
  )
}

export default TimeIcon