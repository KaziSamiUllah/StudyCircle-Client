import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import PublicLayout from "../Pages/Layouts/PublicLayout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout></PublicLayout>,  
    children: [
      {
        path: "/",
        element: <Home></Home>,
      }
    ]
  },
]);

export default router;