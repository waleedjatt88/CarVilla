import React from "react";
import "./App.css";
// import Navbar from "./Components/Navbar/Navbar";
// import Header from "./pages/Header/Header";
// import SearchTable from "./pages/SearchTable/SearchTable";
// import Services from "./pages/Services/Services";
// import NewCars from "./pages/NewCars/NewCars";
// import FeaturedCars from "./pages/FeaturedCars/FeaturedCars";
// import Brands from "./pages/Brands/Brands";
// import Clients from "./pages/Clients/Clients";
// import Footer from "./Components/Footer/Footer";
// import MyLandingPage from "./MyMainPage/MyLandingPage";
import { BrowserRouter } from "react-router-dom";
import CommonRoutes from "./routes/CommonRoutes";

const App = () => {
  return (
    <>
    
        <CommonRoutes />
     
      {/* <MyLandingPage/> */}
    </>
  );
};

export default App;
