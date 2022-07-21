import { View, Text, ImageBackground, StyleProp, ViewStyle } from 'react-native';
import React from 'react';

type Props = {
  imgUrl: string;
  children: JSX.Element | JSX.Element[];
  containerStyle?: StyleProp<ViewStyle>;
  subContainerStyle?: StyleProp<ViewStyle>;
  bgImgStyle?: StyleProp<ViewStyle>;
}

const ImageHeader = ({
  imgUrl, 
  children,
  containerStyle,
  subContainerStyle,
  bgImgStyle,
} : Props) => {
  return (
    <View style={containerStyle}>
      <ImageBackground 
        source={{ uri : imgUrl }} 
        style={bgImgStyle}
        resizeMode='cover'
      >
        <View style={subContainerStyle}>
         { children }
        </View>
      </ImageBackground>
    </View>
  )
}

export default ImageHeader