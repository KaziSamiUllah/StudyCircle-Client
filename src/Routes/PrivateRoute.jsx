import React from 'react';
import useUser from '../Hooks/useUser';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, isPending} = useUser()
    const location = useLocation();
    
    if(isPending){
        <span className="loading loading-ring loading-lg"></span>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};


export default PrivateRoute;