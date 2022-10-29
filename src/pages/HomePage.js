import Application from "../component/Application";
import Banner from "../component/Banner";
import Footer from "../component/Footer";
import NavBarHeader from "../component/NavBarHeader";
import Products from "../component/Products";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import SearchBox from "../component/SearchBox";

function HomePage(props) {
  return (
    <div>
      <NavBarHeader />
      <SearchBox />
      <Banner />
      <Products />
      <Application />
      <Footer />
    </div>
  );
}
export default HomePage;
