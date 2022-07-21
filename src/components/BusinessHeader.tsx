import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import ImageHeader from './ImageHeader';

type Props = {
  imgUrl : string;
  title : string;
  subTitle: string;
}

const BusinessHeader = ({
  imgUrl,
  title,
  subTitle
} : Props) => {
  return (
    <ImageHeader 
      imgUrl={imgUrl} 
      containerStyle={ styles.container } 
      bgImgStyle={ styles.bgImgStyle }
      subContainerStyle={ styles.subContainer}
    >
      <Text style={ styles.title }>{title}</Text>
      <Text style={ styles.subTitle }>{subTitle}</Text>
    </ImageHeader>
  )
}

export default BusinessHeader

const styles = StyleSheet.create({
  container: {
    height: 185,
  },
  bgImgStyle: {
    flex: 1,
  },
  subContainer: {
    alignItems: 'flex-end',
    backgroundColor:'rgba(0,0,0,0.4)',
    flex: 1,
    justifyContent: 'flex-end',
    padding: 15,
  },
  title: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
})