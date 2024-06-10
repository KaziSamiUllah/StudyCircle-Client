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
import PrivateRoute from "./PrivateRoute";
import StudentRoute from "./StudentRoute";
import TutorRoute from "./TutorRoute";
import AllDisplaySessions from "../Pages/Home/Study sessions/AllDisplaySessions";


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
        element: (
          <PrivateRoute>
            <SessionDetails></SessionDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/allDisplaySessions",
        element: (
          <PrivateRoute>
           <AllDisplaySessions></AllDisplaySessions>
          </PrivateRoute>
        ),
      },
      {
        path: "/payment/:id",
        element: (
          <StudentRoute>
            <Payment></Payment>
          </StudentRoute>
        ),
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
        element: <TutorRoute><CreateSession></CreateSession></TutorRoute>,
      },
      {
        path: "tutorSessions",
        element: <TutorRoute><TutorSessions></TutorSessions></TutorRoute>,
      },
      {
        path: "tutorMaterials",
        element: <TutorRoute><TutorMaterials></TutorMaterials></TutorRoute>,
      },
      {
        path: "uploadMaterials/:id",
        element: <TutorRoute><UploadMaterials></UploadMaterials></TutorRoute>,
      },
      {
        path: "updateMaterials/:id",
        element: <TutorRoute><EditMaterials></EditMaterials></TutorRoute>,
      },
      {
        path: "reApply/:id",
        element: <ReApply></ReApply>,
      },
      //////Student Routes//////////////
      {
        path: "bookedSessions",
        element: (
          <StudentRoute>
            <BookedSessions></BookedSessions>
          </StudentRoute>
        ),
      },
      {
        path: "createNote",
        element: (
          <StudentRoute>
            <CreateNote></CreateNote>
          </StudentRoute>
        ),
      },
      {
        path: "myNotes",
        element: (
          <StudentRoute>
            <MyNotes></MyNotes>
          </StudentRoute>
        ),
      },
      {
        path: "createNote",
        element: (
          <StudentRoute>
            <CreateNote></CreateNote>
          </StudentRoute>
        ),
      },
      {
        path: "studentMaterials",
        element: (
          <StudentRoute>
            <MyStudyMaterials></MyStudyMaterials>
          </StudentRoute>
        ),
      },
      {
        path: "bookedSessionDetails/:id",
        element: (
          <StudentRoute>
            <BookedSessionDetails></BookedSessionDetails>
          </StudentRoute>
        ),
      },
      {
        path: "createNote",
        element: (
          <StudentRoute>
            <CreateNote></CreateNote>
          </StudentRoute>
        ),
      },
      {
        path: "updateNote/:id",
        element: (
          <StudentRoute>
            <UpdateNotes></UpdateNotes>
          </StudentRoute>
        ),
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
        element: <UpdateSession></UpdateSession>,
      },
    ],
  },
]);

export default router;
