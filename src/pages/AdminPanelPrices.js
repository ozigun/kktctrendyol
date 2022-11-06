import React, { useEffect, useState } from "react";

import AdminPanelNavbar from "../component/AdminPanel/AdminPanelNavbar";
import PricesOpt from "../component/AdminPanel/PricesOpt";
import SiparisList from "../component/AdminPanel/SiparisList";

function AdminPanel(props) {
  return (
    <div>
      <AdminPanelNavbar />
      <PricesOpt />
    </div>
  );
}
export default AdminPanel;
