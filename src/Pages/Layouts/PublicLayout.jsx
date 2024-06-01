import { Outlet } from "react-router-dom";
import Navbar from "../../Routes/Components/Shared/Navbar";
import Footer from "../../Routes/Components/Shared/Footer";

const PublicLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default PublicLayout;
