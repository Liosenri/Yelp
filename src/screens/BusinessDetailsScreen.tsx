import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {HomeStackNavigatorParamsList} from '../navigation/navigator/HomeStackNavigator';
import useBusinessDetailByID from '../hooks/useBusinessDetailByID';
import LoadingView from '../components/LoadingView';
import BusinessHeader from '../components/BusinessHeader';
import BusinessDetailsBar from '../components/BusinessDetailsBar';
import BusinessHours from '../components/BusinessHours';
import { ScrollView } from 'react-native-gesture-handler';
import BusinessAddress from '../components/BusinessAddress';

type Props = {
  route: RouteProp<HomeStackNavigatorParamsList, 'BusinessDetails'>;
};

const BusinessDetailsScreen = ({
  route: {
    params: {businessId},
  },
}: Props) => {
  const businessDetails = useBusinessDetailByID(businessId)

  businessDetails && console.log(JSON.stringify(businessDetails.hours, null, 3))

  return (<View style={{flex:1}}>{businessDetails 
    ? <ScrollView>
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
          hours={ businessDetails.hours }
        />
        <BusinessAddress 
          location={ businessDetails.location }
        />
        <View style={{}}>
          { businessDetails.photos.map( photo => (
              <Image source={{uri: photo}} style={{height:200, borderWidth: 1, width: '100%'}}/>
          ))}
        </View>
    </ScrollView>
    : <LoadingView text='Loading business information ...'/>}
  </View>);
};

export default BusinessDetailsScreen;

const styles = StyleSheet.create({});
