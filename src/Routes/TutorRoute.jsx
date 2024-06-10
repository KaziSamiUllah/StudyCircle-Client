import useUser from "../Hooks/useUser";
import { useLocation, Navigate } from "react-router-dom";

const TutorRoute = ({ children }) => {
  const { user, savedUser, loading } = useUser();
  const location = useLocation();

  if (loading) {
    <span className="loading loading-ring loading-lg"></span>;
  }

  if (user && savedUser?.role === "Tutor") {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default TutorRoute;
