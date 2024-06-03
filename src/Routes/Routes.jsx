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
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/sessionDetails/:id',
        element: <SessionDetails></SessionDetails>
      },

    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "createSession",
        element: <CreateSession></CreateSession>
      },
      {
        path: "tutorSessions",
        element: <TutorSessions></TutorSessions>
      },
      {
        path: "tutorMaterials",
        element: <TutorMaterials></TutorMaterials>
      },
      {
        path: "uploadMaterials/:id",
        element: <UploadMaterials></UploadMaterials>
      },
      {
        path: "updateMaterials/:id",
        element: <EditMaterials></EditMaterials>
      },
      {
        path: "allNotes",
        element: <AllNotes></AllNotes>
      },
    ]
  }
]);

export default router;