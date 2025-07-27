import {
  createBrowserRouter,
 
} from "react-router";
import RoutLayout from "../../roootlyout/RoutLayout";
import Home from "../../components/home/Home";
import ContactForm from "../../components/contact/ContactForm";


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
        path: 'contact',
        Component:ContactForm
      }
      
   ]
  },
]);