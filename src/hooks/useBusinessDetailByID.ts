import React, { useEffect, useState } from 'react'
import { getBusinessById } from '../services/yelpServices';
import { BusinessDetails } from '../types';

function useBusinessDetailByID(businessId : string) : BusinessDetails | null {
  const [businessDetails, setBusinessDetails] =
  useState<BusinessDetails | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        console.log('Getting business details for id: ' + businessId);
        const response = await getBusinessById(businessId);
        setBusinessDetails(response.data);
        console.log('Got business details for id: ' + businessId);
      } catch (error) {}
    };
    getData();
  }, [businessId]);

  return businessDetails
}

export default useBusinessDetailByID