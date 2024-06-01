import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useSessionData = () => {
    const { isLoading, data = {} } = useQuery({

        // queryKey: ["userData"],
        // queryFn: async () => {
        //   const res = await axiosSecure.get(`/sessions/${user.email}`);
        //   return res;
        // },
      });
    return {savedUser: data.data};
};

export default useSessionData;



