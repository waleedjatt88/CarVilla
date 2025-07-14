import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import MyLandingPage from "../MyMainPage/MyLandingPage";
import Login from "../auth/Login";
import AboutUs from "../pages/About us/AboutUs";
import Signup from "../auth/Signup";

function CommonRoutes() {
  return (
    <>
      <Routes>
         <Route path="/" element={<Login />} />
        <Route path="/login" element={< MyLandingPage/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="aboutus" element={<AboutUs />} />
        </Route>
        
      </Routes>
    </>
  );
}

export default CommonRoutes;
