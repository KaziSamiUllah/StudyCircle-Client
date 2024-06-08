import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import PublicLayout from "../Pages/Layouts/PublicLayout";
import Login from "../Pages/Login & Register/Login";
import SignUp from "../Pages/Login & Register/SignUp";
import Dashboard from "../Pages/Layouts/Dashboard";
import CreateSession from "../Pages/Dashboard/Tutor/CreateSession";

import TutorMaterials from "../Pages/Dashboard/Tutor/TutorMaterials";
import TutorSessions from "../Pages/Dashboard/Tutor/TutorSessions";
import UploadMaterials from "../Pages/Dashboard/Tutor/UploadMaterials";
import AllNotes from "../Pages/Dashboard/Tutor/AllNotes";
import SessionDetails from "../Pages/Home/SessionDetails/SessionDetails";
import EditMaterials from "../Pages/Dashboard/Tutor/EditMaterials";
import BookedSessions from "../Pages/Dashboard/Student/BookedSessions";
import CreateNote from "../Pages/Dashboard/Student/CreateNote";
import MyNotes from "../Pages/Dashboard/Student/MyNotes";
import MyStudyMaterials from "../Pages/Dashboard/Student/MyStudyMaterials";
import BookedSessionDetails from "../Pages/Dashboard/Student/BookedSessionDetails";
import UpdateNotes from "../Pages/Dashboard/Student/UpdateNotes";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers";
import AllStudySessions from "../Pages/Dashboard/Admin/AllStudySessions";
import AllMaterials from "../Pages/Dashboard/Admin/AllMaterials";
import UpdateSession from "../Pages/Dashboard/Admin/UpdateSession";
import ReApply from "../Pages/Dashboard/Tutor/ReApply";
import Payment from "../Pages/Dashboard/Student/Payments/Payment";


const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout></PublicLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/sessionDetails/:id",
        element: <SessionDetails></SessionDetails>,
      },
      {
        path: "/payment/:id",
        element: <Payment></Payment>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      //////////////Tutor routes////////////////
      {
        path: "createSession",
        element: <CreateSession></CreateSession>,
      },
      {
        path: "tutorSessions",
        element: <TutorSessions></TutorSessions>,
      },
      {
        path: "tutorMaterials",
        element: <TutorMaterials></TutorMaterials>,
      },
      {
        path: "uploadMaterials/:id",
        element: <UploadMaterials></UploadMaterials>,
      },
      {
        path: "updateMaterials/:id",
        element: <EditMaterials></EditMaterials>,
      },
      {
        path: "allNotes",
        element: <AllNotes></AllNotes>,
      },
      {
        path: "reApply/:id",
        element: <ReApply></ReApply>,
      },
      //////Student Routes//////////////
      {
        path: "bookedSessions",
        element: <BookedSessions></BookedSessions>,
      },
      {
        path: "createNote",
        element: <CreateNote></CreateNote>,
      },
      {
        path: "myNotes",
        element: <MyNotes></MyNotes>,
      },
      {
        path: "createNote",
        element: <CreateNote></CreateNote>,
      },
      {
        path: "studentMaterials",
        element: <MyStudyMaterials></MyStudyMaterials>,
      },
      {
        path: "bookedSessionDetails/:id",
        element: <BookedSessionDetails></BookedSessionDetails>,
      },
      {
        path: "createNote",
        element: <CreateNote></CreateNote>,
      },
      {
        path: "updateNote/:id",
        element: <UpdateNotes></UpdateNotes>,
      },
    

      //////////Admin Routes///////////
      {
        path: "admin/allUsers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "admin/studySessions",
        element: <AllStudySessions></AllStudySessions>,
      },
      {
        path: "admin/allMaterials",
        element: <AllMaterials></AllMaterials>,
      },
      {
        path: "admin/editSession/:id",
        element:<UpdateSession></UpdateSession>,
      }
    ],
  },
]);

export default router;
