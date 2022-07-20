import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import SearchBar from '../components/SearchBar';
import {getBusinesses} from '../services/yelpServices';
import {Business} from '../types';
import BusinessList from '../components/BusinessList';
import LoadingView from '../components/LoadingView';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeStackNavigatorParamsList} from '../navigation/navigator/HomeStackNavigator';

type Props = {
  navigation: StackNavigationProp<HomeStackNavigatorParamsList, 'Home'>;
};

const HomeScreen = ({navigation}: Props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnEndEditing = async () => {
    setIsLoading(true);
    try {
      const response = await getBusinesses(searchQuery, 'San Francisco');
      setBusinesses(response.data.businesses);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const onPressbusinessItem = (businessId: string) =>
    navigation.navigate('BusinessDetails', {businessId});

  return (
    <View style={styles.containerView}>
      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        onEndEditing={handleOnEndEditing}
      />
      {isLoading ? (
        <LoadingView text="Cargando negocios" />
      ) : (
        <BusinessList
          businnesses={businesses}
          onPressItem={onPressbusinessItem}
        />
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({containerView: {flex: 1}});
