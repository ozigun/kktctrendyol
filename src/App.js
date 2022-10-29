import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import SingleProduct from "./component/SingleProduct";
import Shopping from "./pages/Shopping";
import CustomerPage from "./pages/CustomerPage";
import HowIsItWorks from "./pages/HowIsItWork";
import BannedProductsPage from "./pages/BannedProductPage";
import Prices from "./pages/Prices";
import { productList } from "./productList";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/users/").then((response) => {
      setData(response.data);
      console.log(data);
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route
            path="/singleproduct/:id"
            element={<SingleProduct products={productList} />}
          />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/nasil-calisir" element={<HowIsItWorks />} />
          <Route path="/yasakli" element={<BannedProductsPage />} />
          <Route path="/prices" element={<Prices />} />
          <Route
            path="/customer/:id"
            element={<CustomerPage userData={data} />}
          />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
