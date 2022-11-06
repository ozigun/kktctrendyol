import Application from "../component/Application";
import Banner from "../component/Banner";
import Footer from "../component/Footer";
import NavBarHeader from "../component/NavBarHeader";
import Products from "../component/Products";
import { Routes, Router, Route, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import SearchBox from "../component/SearchBox";
import AdminPanelNavbar from "../component/AdminPanel/AdminPanelNavbar";
import SiparisList from "../component/AdminPanel/SiparisList";

function AdminPanel(props) {
  return (
    <div>
      <AdminPanelNavbar />
      <SiparisList userData={props.userData} />
    </div>
  );
}
export default AdminPanel;
