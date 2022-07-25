import { Image, ImageStyle, StyleProp} from 'react-native'
import React from 'react'

type Props = {
  style?: StyleProp<ImageStyle>
}

const StarIcon = ({ style }: Props) => {
  return (
    <Image source={require('../assets/star.png')} style={{width:15, height:15}}/>
  )
}

export default StarIcon