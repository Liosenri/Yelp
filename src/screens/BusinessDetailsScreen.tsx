import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BusinessDetails} from '../types';
import {getBusinessById} from '../services/yelpServices';
import {RouteProp} from '@react-navigation/native';
import {HomeStackNavigatorParamsList} from '../navigation/navigator/HomeStackNavigator';
import useBusinessDetailByID from '../hooks/useBusinessDetailByID';
import LoadingView from '../components/LoadingView';
import ImageHeader from '../components/ImageHeader';
import BusinessHeader from '../components/BusinessHeader';
import BusinessDetailsBar from '../components/BusinessDetailsBar';
import BusinessHours from '../components/BusinessHours';

type Props = {
  route: RouteProp<HomeStackNavigatorParamsList, 'BusinessDetails'>;
};

const BusinessDetailsScreen = ({
  route: {
    params: {businessId},
  },
}: Props) => {
  const businessDetails = useBusinessDetailByID(businessId)

  return (<View style={{flex:1}}>{businessDetails 
    ? <View>
        <BusinessHeader 
          title={ businessDetails.name }
          subTitle={ businessDetails.display_phone }
          imgUrl={ businessDetails.image_url }
        />
        <BusinessDetailsBar 
          rating={ businessDetails.rating }
          reviesNumber={ businessDetails.review_count }
          priceRate={ businessDetails.price }
        />
        <BusinessHours 
          isClosed={ businessDetails.is_closed }
        />
    </View>
    : <LoadingView text='Loading business information ...'/>}
  </View>);
};

export default BusinessDetailsScreen;

const styles = StyleSheet.create({});
