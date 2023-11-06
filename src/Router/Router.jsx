import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import MainLayout from "../mainLayout/MainLayout";
import About from "../Pages/About";
import AddBlog from "../Pages/AddBlog";
import Registration from "../Pages/Registration";
import Login from "../Pages/Login";

const myCreateRoute = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/about',
            element:<About></About>
        },
        {
            path: '/addBlog',
            element:<AddBlog></AddBlog>
        },
        {
          path: '/registration',
          element: <Registration></Registration>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
      ]
    },
  ]);



export default myCreateRoute;