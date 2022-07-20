import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BusinessDetails} from '../types';
import {getBusinessById} from '../services/yelpServices';
import {RouteProp} from '@react-navigation/native';
import {HomeStackNavigatorParamsList} from '../navigation/navigator/HomeStackNavigator';

type Props = {
  route: RouteProp<HomeStackNavigatorParamsList, 'BusinessDetails'>;
};

const BusinessDetailsScreen = ({
  route: {
    params: {businessId},
  },
}: Props) => {
  const [businessDetails, setBusinessDetails] =
    useState<BusinessDetails | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        console.log('Getting business details for id: ' + businessId);
        const response = await getBusinessById(businessId);
        setBusinessDetails(response.data);
      } catch (error) {}
    };
    getData();
  }, [businessId]);

  return <View>{businessDetails && <Text>{businessDetails.name}</Text>}</View>;
};

export default BusinessDetailsScreen;

const styles = StyleSheet.create({});
