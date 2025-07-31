import { createBrowserRouter } from "react-router";  // use react-router-dom, not "react-router"
import RoutLayout from "../../roootlyout/RoutLayout";
import Home from "../../components/home/Home";

import AdminContacts from "../admin/AdminContacts";
import ContactPage from "../../components/contact/ContactPage";
import SignIn from "../authentication/SignIn";
import SignUp from "../authentication/SignUp";
import Aboute from "../../components/about/Aboute";
import DashboardLayout from "../../components/DashboardLayout";

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
        path: "signin",
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
            path: "admin/contacts",
            element: <AdminContacts />,
          },
          // Add more dashboard nested routes here
        ],
      },
    ],
  },
]);
