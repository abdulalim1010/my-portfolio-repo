import {
  createBrowserRouter,
 
} from "react-router";
import RoutLayout from "../../roootlyout/RoutLayout";
import Home from "../../components/home/Home";

import AdminContacts from "../admin/AdminContacts";
import ContactPage from "../../components/contact/ContactPage";
import SignIn from "../authentication/SignIn";
import SignUp from "../authentication/SignUp";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: RoutLayout,
    children: [
      {
        index: true,
        Component:Home
      },
      {
        path: "contact",
        Component:ContactPage

      },
      
      {
        path: "/admin/contacts",
        Component:AdminContacts
      }
      ,
      {
        path: '/sign-in',
        Component:SignIn
      },
      {
        path: "/sign-up",
        Component:SignUp
      }
      
   ]
  },
]);