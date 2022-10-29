import React from "react";
import LoginComponent from "../component/LoginComponent";
import NavBarHeader from "../component/NavBarHeader";
import SearchBox from "../component/SearchBox";

function LoginPage() {
  return (
    <div>
      <NavBarHeader />
      <SearchBox />
      <LoginComponent />
    </div>
  );
}
export default LoginPage;
