import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet id="outlet" />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
