import Application from "../component/Application";
import Banner from "../component/Banner";
import Footer from "../component/Footer";
import NavBarHeader from "../component/NavBarHeader";
import Products from "../component/Products";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import SearchBox from "../component/SearchBox";

function HomePage(props) {
  const [searchDataId, setSearchDataId] = useState("");
  const [searchDataTitle, setSearchDataTitle] = useState("");
  const [searchDataImg, setSearchDataImg] = useState("");
  const [searchDataPrice, setSearchDataPrice] = useState("");
  const [searchDataAbout, setSearchDataAbout] = useState("");

  useEffect(() => {
    const data = {
      id: searchDataId,
      title: searchDataTitle,
      img: searchDataImg,
      price: searchDataPrice,
      about: searchDataAbout,
    };
    //props.productData(data);
    // console.log(data);
  }, []);

  /* const loginSubmit = () => {
    const data = {
      id: searchDataId,
      title: searchDataTitle,
      img: searchDataImg,
      price: searchDataPrice,
      about: searchDataAbout,
    };
    props.productData(data);
    console.log(data);
  };*/

  const onSubmitId = (e) => {
    props.productId(e);
  };
  const onSubmitTitle = (e) => {
    props.productTitle(e);
  };
  const onSubmitImg = (e) => {
    props.productImg(e);
  };
  const onSubmitPrice = (e) => {
    props.productPrice(e);
  };
  const onSubmitAbout = (e) => {
    props.productAbout(e);
  };

  return (
    <div>
      <NavBarHeader />
      <SearchBox
        id={onSubmitId}
        title={onSubmitTitle}
        img={onSubmitImg}
        price={onSubmitPrice}
        about={onSubmitAbout}
      />
      <Banner />
      <Products />
      <Application />
      <Footer />
    </div>
  );
}
export default HomePage;
