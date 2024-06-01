import { Outlet } from "react-router-dom";
import DashboardNav from "../../Components/Shared/DashboardNav";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="bg-accent  font-bold min-h-screen w-2/12">
        <DashboardNav></DashboardNav>
      </div>
      <div className="w-10/12">
      <Outlet></Outlet>
      </div>
      
    </div>
  );
};

export default Dashboard;
