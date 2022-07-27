import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  onEndEditing: () => void;
};

const SearchBar = ({value, onChangeText, onEndEditing}: Props) => {
  return (
    <View style={styles.containerView}>
      <TextInput
        onEndEditing={onEndEditing}
        style={styles.textInput}
        placeholder="Buscar en yelp..."
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  containerView: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 8,
    marginHorizontal: 16,
    marginTop: 16,
  },
  textInput: {height: 44},
});
