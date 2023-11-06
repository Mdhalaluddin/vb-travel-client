import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import MainLayout from "../mainLayout/MainLayout";
import About from "../Pages/About";
import AddBlog from "../Pages/AddBlog";

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
        }
      ]
    },
  ]);



export default myCreateRoute;