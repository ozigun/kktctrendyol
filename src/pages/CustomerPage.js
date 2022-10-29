import Application from "../component/Application";
import Banner from "../component/Banner";
import Footer from "../component/Footer";
import NavBarHeader from "../component/NavBarHeader";
import Products from "../component/Products";
import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import SearchBox from "../component/SearchBox";

function CustomerPage(props) {
  let location = useLocation();

  const customer = props.userData.filter(
    (customer) => customer._id === location.pathname.split("/customer/")[1]
  );

  return !customer.length ? (
    <h1>loading</h1>
  ) : (
    <div>
      <NavBarHeader customer={customer[0]} />
      <SearchBox />
      <Products />
      <Application />
      <Footer />
    </div>
  );
}
export default CustomerPage;
