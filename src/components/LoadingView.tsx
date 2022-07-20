import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {
  text?: string;
};

const LoadingView = ({text = 'Cargando'}: Props) => {
  return (
    <View style={styles.containerView}>
      <ActivityIndicator size="large" />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default LoadingView;

const styles = StyleSheet.create({
  containerView: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {fontSize: 16, fontWeight: 'bold', marginTop: 8},
});
