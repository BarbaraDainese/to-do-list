import { Button } from "@chakra-ui/react";
import { createBrowserRouter, Link } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/> 
  
  },
  {
    path: "about",
    element: <About/>
  },
]);
