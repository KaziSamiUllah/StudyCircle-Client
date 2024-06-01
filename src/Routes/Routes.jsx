import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import PublicLayout from "../Pages/Layouts/PublicLayout";
import Login from "../Pages/Login & Register/Login";
import SignUp from "../Pages/Login & Register/SignUp";


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
    ]
  },
]);

export default router;