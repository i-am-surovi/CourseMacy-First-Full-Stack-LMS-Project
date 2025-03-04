import React from "react";
import { Button } from "./components/ui/button";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import Login from "./Pages/auth/Login";
import Signup from "./Pages/auth/Signup";



const router = createBrowserRouter([
  {
    path:"/",
    element: <><Navbar/><Home/></>
  },
  {
    path: "/courses",
    element: <><Navbar/><Courses/></>
  },
  {
    path:"/login",
    element: <><Navbar/><Login/></>
  },
  {
    path:"/signup",
    element: <><Navbar/><Signup/></>
  },
])

const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
};

export default App;
