import { useNavigate } from "react-router-dom";
import ActiveNavlink from "./ActiveNavlink";
import useUser from "../../Hooks/useUser";

const DashboardNav = () => {
  const navigate = useNavigate();
  const { SignOut, savedUser } = useUser();
  const handleSingOut = () => {
    SignOut().then(() => {
      navigate("/");
    });
  };

  return (
    <div className=" relative h-screen">
      <ActiveNavlink label="Home" address="/" />
      {/* Tutor Nav Links */}
      <div
        className={`flex flex-col ${
          savedUser?.role == "tutor"
            ? ""
            : "hidden" && savedUser?.role == "tutor"
            ? ""
            : "hidden"
        }`}
      >
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
      {/* Student nav links */}
      <div
        className={` flex flex-col ${
          savedUser?.role == "student" ? "" : "hidden"
        }`}
      >
        <ActiveNavlink
          label="Booked Sessions"
          address="/dashboard/bookedSessions"
        />
        <ActiveNavlink label="Create a Note" address="/dashboard/createNote" />
        <ActiveNavlink label="My Notes" address="/dashboard/myNotes" />

        <div>
          <ActiveNavlink
            label="My Session Materials"
            address="/dashboard/studentMaterials"
          />
        </div>
      </div>
      {/* Admin ROutes */}
      <div
        className={` flex flex-col ${
          savedUser?.role == "admin" ? "" : "hidden"
        }`}
      >
        <ActiveNavlink label="All Users" address="/dashboard/admin/allUsers" />
        <ActiveNavlink
          label="All Study Sessions"
          address="/dashboard/admin/studySessions"
        />
        <ActiveNavlink
          label="All Materials"
          address="/dashboard/admin/allMaterials"
        />
      </div>

      <div className="bg-red-100 w-2/12 bottom-0  fixed">
        <button className="btn btn-square w-full" onClick={handleSingOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default DashboardNav;
