import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { axiosSecure } from './useAxiosSecure';

const useFetchSessionbyId = (ID) => {
    const { isLoading, refetch, error, data = {} }= useQuery({
        queryKey: ["sessionDetails"],
        queryFn: async () => {
          const res = await axiosSecure.get(`/sessionsdata/${ID}`);
          return res;
        },
      });
    
      const sessionData = data.data;
    
      return { isLoading, error, sessionData, refetch };
};

export default useFetchSessionbyId;