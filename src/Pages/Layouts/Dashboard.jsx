import { Outlet } from "react-router-dom";
import DashboardNav from "../../Components/Shared/DashboardNav";

const Dashboard = () => {
  return (
    <div className="flex lg:flex-row flex-col">
      <div className="bg-accent  font-bold  lg:min-h-screen lg:w-2/12">
        <DashboardNav></DashboardNav>
      </div>
      <div className="my-10 lg:w-10/12  mx-10">
      <Outlet></Outlet>
      </div>
      
    </div>
  );
};

export default Dashboard;
