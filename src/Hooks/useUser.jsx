import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useUser = () => {
    const {user, SignOut} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()

    const { isLoading, data = {}, isPending } = useQuery({
        queryKey: ["userData"],
        queryFn: async () => {
          const res = await axiosSecure.get(`/users/${user.email}`);
          return res;
        },
      });
    return {user, SignOut, savedUser: data.data, isPending};
};

export default useUser;