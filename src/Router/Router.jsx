import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import MainLayout from "../mainLayout/MainLayout";
import About from "../Pages/About";
import AddBlog from "../Pages/AddBlog";
import Registration from "../Pages/Registration";
import Login from "../Pages/Login";
import Wishlist from "../Pages/Wishlist";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import AllBlogs from "../Pages/AllBlogs";
import Update from "../Pages/Update";
import Details from "../Pages/Details";
import Comment from "../Pages/Comment";

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
        element: <About></About>
      },
      {
        path: '/addBlog',
        element: <AddBlog></AddBlog>
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/wishlist',
        element: <PrivetRoute><Wishlist></Wishlist></PrivetRoute>,
      },
      {
        path: '/allBlog',
        element: <AllBlogs></AllBlogs>
      },
      {
        path: '/update/:id',
        element: <PrivetRoute><Update></Update></PrivetRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/language/${params.id}`)
      },
      {
        path: '/details/:id',
        element: <PrivetRoute><Details></Details></PrivetRoute>,
        loader: () => fetch('http://localhost:5000/language'),

      },
      {
        path: '/comment',
        element: <Comment></Comment>,
        loader: ()=> fetch('http://localhost:5000/comment')

      }
    ]
  },
]);



export default myCreateRoute;