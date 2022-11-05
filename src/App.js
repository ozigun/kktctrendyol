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
  const [searchData, setSearchData] = useState([]);
  const [productIdd, setProductId] = useState([]);
  const [productPricee, setProductPrice] = useState([]);
  const [productAboutt, setProductAbout] = useState([]);
  const [productTitlee, setProductTitle] = useState([]);
  const [productImgg, setProductImg] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/users/").then((response) => {
      setSearchData(response.data);
      console.log(data);
    });
  }, []);
  const productId = (e) => {
    setProductId(e);
  };
  const productTitle = (e) => {
    setProductTitle(e);
    console.log(productTitlee);
  };
  const productAbout = (e) => {
    setProductAbout(e);
  };
  const productImg = (e) => {
    setProductImg(e);
  };
  const productPrice = (e) => {
    setProductPrice(e);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                productId={productId}
                productPrice={productPrice}
                productImg={productImg}
                productAbout={productAbout}
                productTitle={productTitle}
              />
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route
            path="/singleproduct/:id"
            element={
              <SingleProduct
                productId={productIdd}
                productPrice={productPricee}
                productImg={productImgg}
                productAbout={productAboutt}
                productTitle={productTitlee}
              />
            }
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
