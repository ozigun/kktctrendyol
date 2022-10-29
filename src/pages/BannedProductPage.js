import React, { useEffect, useState } from "react";
import NavBarHeader from "../component/NavBarHeader";
import SearchBox from "../component/SearchBox";
import BannedProducts from "../component/BannedProducts";

function BannedProductsPage(props) {
  return (
    <div>
      <NavBarHeader />
      <SearchBox />
      <BannedProducts />
    </div>
  );
}
export default BannedProductsPage;
