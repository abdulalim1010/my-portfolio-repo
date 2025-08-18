import { createBrowserRouter } from "react-router";  // use react-router-dom, not "react-router"
import RoutLayout from "../../roootlyout/RoutLayout";
import Home from "../../components/home/Home";


import ContactPage from "../../components/contact/ContactPage";
import SignIn from "../authentication/SignIn";
import SignUp from "../authentication/SignUp";
import Aboute from "../../components/about/Aboute";
import DashboardLayout from "../../components/DashboardLayout";
import DashboardMessages from "../../components/contact/DashboardMessages";
import AllUsers from "../../components/contact/AllUsers";

import ManageProjects from "../../components/ManageProjects";
import Projects from "../Projects";
import EducationPage from "../../components/education/EducationPage";
import Blog from "../../components/blog/Blog";
import Resume from "../../components/home/Resume";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RoutLayout />,   // use element instead of Component
    children: [
      {
        index: true,
        element: <Home />,     // use element here as well
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "about",
        element: <Aboute />,
      },
      {
        path: '/projects',
        element:<Projects/>

      },
      {
        path: "/education",
        Component:EducationPage
      },
      {
        path: '/blog',
        Component:Blog
      }
      ,
      {
        path: 'resume',
        Component:Resume
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          {
           path: "/dashboard/messages",
            element:<DashboardMessages/>
          },
          {
            path: "/dashboard/users",
            element:<AllUsers/>
          },
          {
            path: "/dashboard/manageproject",
            element:<ManageProjects/>

          }
          // Add more dashboard nested routes here
        ],
      },
    ],
  },
]);
