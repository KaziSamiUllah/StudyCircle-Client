import React from "react";
import useUser from "../Hooks/useUser";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {

  const { user, isPending } = useUser();
  const location = useLocation();
  if(isPending){
    return <div className="w-full h-screen flex justify-center items-center">
    <span className="loading loading-ring loading-lg"></span>
  </div>
  }

  else if (user) {
    return children;
  }
  else
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
