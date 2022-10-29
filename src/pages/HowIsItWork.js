import React, { useEffect, useState } from "react";
import NavBarHeader from "../component/NavBarHeader";
import HowComponent from "../component/HowComponent";
import SearchBox from "../component/SearchBox";

function HowIsItWorks(props) {
  return (
    <div>
      <NavBarHeader />
      <SearchBox />
      <HowComponent />
    </div>
  );
}
export default HowIsItWorks;
