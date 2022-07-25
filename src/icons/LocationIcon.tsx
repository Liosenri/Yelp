import { Image, ImageStyle, StyleProp} from 'react-native'
import React from 'react'

type Props = {
  style?: StyleProp<ImageStyle>
}

const LocationIcon = ({ style }: Props) => {
  return (
    <Image source={require('../assets/location.png')} style={{width:15, height:15}}/>
  )
}

export default LocationIcon