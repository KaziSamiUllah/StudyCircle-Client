import { Outlet } from "react-router-dom";
import DashboardNav from "../../Components/Shared/DashboardNav";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="bg-accent  font-bold min-h-screen">
        <DashboardNav></DashboardNav>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
