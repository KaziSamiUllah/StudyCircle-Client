import useUser from "../Hooks/useUser";
import { useLocation, Navigate } from "react-router-dom";

const StudentRoute = ({ children }) => {
  const { user, savedUser, loading } = useUser();
  const location = useLocation();

  if (loading) {
    return <span className="loading loading-ring loading-lg"></span>;
  }

  if (!loading && user && savedUser?.role === "student") {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default StudentRoute;