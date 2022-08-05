import {Text, View} from 'react-native';
import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {HomeStackNavigatorParamsList} from '../navigation/navigator/HomeStackNavigator';
import {useGetBusinessDetailsByIdQuery} from '../services/RTKYelpApi';

type Props = {
  route: RouteProp<HomeStackNavigatorParamsList, 'BusinessDetails'>;
};

const BusinessDetailsScreen = ({
  route: {
    params: {businessId},
  },
}: Props) => {
  const {data: businessDetails} = useGetBusinessDetailsByIdQuery(businessId);
  return <View>{businessDetails && <Text>{businessDetails.name}</Text>}</View>;
};

export default BusinessDetailsScreen;
