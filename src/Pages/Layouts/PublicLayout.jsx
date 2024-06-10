import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar";
import Footer from "../../Components/Shared/Footer";


const PublicLayout = () => {
  const location = useLocation()
  return (
    <div>
      <Navbar></Navbar>
      <div className={`${location.pathname !== "/" && "mx-24"}`}>
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default PublicLayout;
