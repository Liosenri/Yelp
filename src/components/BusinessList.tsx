import {ListRenderItem, StyleSheet, View} from 'react-native';
import React from 'react';
import {Business} from '../types';
import {FlatList} from 'react-native-gesture-handler';
import BusinessItem from './BusinessItem';

type Props = {
  businnesses: Business[] | null;
  onPressItem?: (businessId: string) => void;
};

const BusinessList = ({businnesses, onPressItem}: Props) => {
  const renderItem: ListRenderItem<Business> = ({item}) => (
    <BusinessItem business={item} onPress={onPressItem} />
  );

  const renderItemSepartor = () => <View style={styles.separatorView} />;

  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.contentContainer}
      data={businnesses}
      renderItem={renderItem}
      ItemSeparatorComponent={renderItemSepartor}
    />
  );
};

export default BusinessList;

const styles = StyleSheet.create({
  list: {flex: 1},
  contentContainer: {padding: 16},
  separatorView: {height: 16},
});
