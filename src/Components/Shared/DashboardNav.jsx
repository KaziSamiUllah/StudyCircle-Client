import React from "react";
import { NavLink } from "react-router-dom";
import ActiveNavlink from "./ActiveNavlink";

const DashboardNav = () => {
  return (
    <div>
      <div className="flex flex-col">
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
        <ActiveNavlink
          label="Upload Materials"
          address="/dashboard/uploadMaterials"
        />
        <ActiveNavlink
          label="All Notes"
          address="/dashboard/allNotes"
        />
      </div>
    </div>
  );
};

export default DashboardNav;
