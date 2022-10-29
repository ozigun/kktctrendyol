import React, { useEffect, useState } from "react";
import NavBarHeader from "../component/NavBarHeader";
import HowComponent from "../component/HowComponent";
import SearchBox from "../component/SearchBox";
import PricesComponent from "../component/PricesComponent";

function Prices(props) {
  return (
    <div>
      <NavBarHeader />
      <SearchBox />
      <PricesComponent />
    </div>
  );
}
export default Prices;
