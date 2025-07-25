import {
  createBrowserRouter,
 
} from "react-router";
import RoutLayout from "../../roootlyout/RoutLayout";
import Home from "../../components/home/Home";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: RoutLayout,
    children: [
      {
        index: true,
        Component:Home
      },
      
   ]
  },
]);