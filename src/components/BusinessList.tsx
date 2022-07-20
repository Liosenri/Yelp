import {ListRenderItem, StyleSheet, View} from 'react-native';
import React from 'react';
import {Business} from '../types';
import {FlatList} from 'react-native-gesture-handler';
import BusinessItem from './BusinessItem';

type Props = {
  businnesses: Business[];
  onPressItem: (businessId: string) => void;
};

const BusinessList = ({businnesses, onPressItem}: Props) => {
  const renderItem: ListRenderItem<Business> = ({item}) => (
    <BusinessItem business={item} onPress={onPressItem} />
  );

  const renderItemSepartor = () => <View style={styles.separatorView} />;

  return (
    <FlatList
      contentContainerStyle={styles.contentContainer}
      data={businnesses}
      renderItem={renderItem}
      ItemSeparatorComponent={renderItemSepartor}
    />
  );
};

export default BusinessList;

const styles = StyleSheet.create({
  contentContainer: {padding: 16},
  separatorView: {height: 16},
});
