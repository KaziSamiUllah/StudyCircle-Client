import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';

const useUser = () => {
    const {user, SignOut} = useContext(AuthContext)
    return [user, SignOut];
};

export default useUser;