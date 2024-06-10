import React, { useContext } from "react";
import useUser from "../Hooks/useUser";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const PrivateRoute = ({ children }) => {
  // const { user, isPending } = useUser();

  const {user, loading} = useContext(AuthContext)
  // console.log(user, isPending);
  const location = useLocation();
  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  if (user) {
    return children;
  } else
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
