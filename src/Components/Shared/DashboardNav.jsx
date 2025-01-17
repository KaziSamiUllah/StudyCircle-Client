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
    <div className=" relative lg:h-screen ">
      <ActiveNavlink label="Home" address="/" />
      {/* Tutor Nav Links */}
      <div
        className={`flex flex-col ${
          savedUser?.role == "Tutor"
            ? ""
            : "hidden" && savedUser?.role == "Tutor"
            ? ""
            : "hidden"
        }`}
      >
        <ActiveNavlink label="My Sessions" address="/dashboard/tutorSessions" />
        <ActiveNavlink
          label="Create study session"
          address="/dashboard/createSession"
        />
        <ActiveNavlink
          label="My Materials"
          address="/dashboard/tutorMaterials"
        />
  
      </div>
      {/* Student nav links */}
      <div
        className={` flex flex-col ${
          savedUser?.role == "Student" ? "" : "hidden"
        }`}
      >
        <ActiveNavlink
          label=" View booked sessions"
          address="/dashboard/bookedSessions"
        />
        <ActiveNavlink label=" Create note" address="/dashboard/createNote" />
        <ActiveNavlink label="Managepersonal notes
" address="/dashboard/myNotes" />

        <div>
          <ActiveNavlink
            label=" View all study materials"
            address="/dashboard/studentMaterials"
          />
        </div>
      </div>
      {/* Admin ROutes */}
      <div
        className={` flex flex-col ${
          savedUser?.role == "Admin" ? "" : "hidden"
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

      <div className="bg-red-100 lg:w-2/12 bottom-0 lg:fixed">
        <button className="btn btn-square w-full" onClick={handleSingOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default DashboardNav;
