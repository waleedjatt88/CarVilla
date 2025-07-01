import React from "react";
import Header from "../pages/Header/Header";
import SearchTable from "../pages/SearchTable/SearchTable";
import Services from "../pages/Services/Services";
import NewCars from "../pages/NewCars/NewCars";
import FeaturedCars from "../pages/FeaturedCars/FeaturedCars";
import Brands from "../pages/Brands/Brands";
import Clients from "../pages/Clients/Clients";
import Footer from "../Components/Footer/Footer";
import "./MyLand.css";

function MyLandingPage() {
  return (
    <>
      <section id="backimage">
        <Header />
      </section>
      <section id="content-section">
        <SearchTable />
        <Services />
      </section>
      <section id="newcarscontainer">
        <NewCars />
      </section>
      <section id="FeaturedCarsContainer">
        <FeaturedCars />
      </section>
      <section id="brandssection">
        <Brands />
      </section>
      <section id="footer1">
        <Clients />
      </section>
    </>
  );
}

export default MyLandingPage;
