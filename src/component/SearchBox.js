import {
  Link,
  Navigate,
  Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function SearchBox(props) {
  const [searchItem, setSearchItem] = useState("");
  const [data, setData] = useState([]);

  const onSearchChange = (e) => {
    setSearchItem(e.target.value);
    console.log(searchItem);
  };
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:4000/trendyol?q=" + searchItem)
      .then((response) => {
        setData(response.data);
        console.log(data);
        console.log(data.id);
      });
    //.then(() => {});
    //console.log("http://localhost:4000/trendyol?q=" + searchItem);
    //props.setSearchItem = searchItem;
  };
  const onSubmit2 = (e) => {
    e.preventDefault();
    navigate("/singleproduct/" + data.id);
    props.id(data.id);
    props.title(data.title);
    props.price(data.price);
    props.img(data.img);
    props.about(data.about);
    //props.submit();

    console.log("http://localhost:4000/trendyol?q=" + searchItem);
  };

  return (
    <div>
      <div className="NavBarHeader justify-content-between ">
        <div class="container mt-3">
          <div class="row align-items-center">
            <div class="col-lg-6 col-sm-12 mx-auto">
              <form action="#" class="search " onSubmit={onSubmit}>
                <div class="input-group w-100 ">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Lütfen almak istediğiniz ürünün linkini buraya yapıştırın"
                    onChange={onSearchChange}
                  />
                  <div class="input-group-append">
                    <button class="btn btn-primary" type="submit">
                      <i class="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </form>
              <br />
              <button
                type="button"
                class="btn btn-primary btn-lg btn-block"
                onClick={onSubmit2}
              >
                Ürün :{data.title}
              </button>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SearchBox;
