import React from "react";
import { NavLink } from "react-router-dom";
import ActiveNavlink from "./ActiveNavlink";
import useUser from "../../Hooks/useUser";

const DashboardNav = () => {
  const { SignOut } = useUser();
  const handleSingOut = () => {
    SignOut();
  };

  return (
    <div className=" relative h-screen">
      <div className="flex flex-col ">
        <ActiveNavlink label="Home" address="/" />
        <ActiveNavlink label="My Sessions" address="/dashboard/tutorSessions" />
        <ActiveNavlink
          label="Create Session"
          address="/dashboard/createSession"
        />
        <ActiveNavlink
          label="My Materials"
          address="/dashboard/tutorMaterials"
        />
        {/* <ActiveNavlink
          label="Upload Materials"
          address="/dashboard/uploadMaterials"
        /> */}
        <ActiveNavlink label="All Notes" address="/dashboard/allNotes" />
      </div>
      <div className="bg-red-100 absolute bottom-0 w-full ">
      
        <button className="btn btn-square w-full" onClick={handleSingOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default DashboardNav;
