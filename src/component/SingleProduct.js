import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "jquery/dist/jquery.slim.min.js";
import "popper.js/dist/umd/popper.min.js";

function SingleProduct(props) {
  const [productIdd, setProductId] = useState([]);

  let location = useLocation();
  useEffect(() => {
    setProductId(props.productIdd);
  }, []);
  /* const product = props.products.filter(
    (product) => product._id === location.pathname.split("/singleproduct/")[1]
  );

  return !product.length ? (
    <h1>loading</h1>
  ) :*/
  return (
    <div className="single-product-container my-5">
      <section class="single-product">
        <div class="container">
          <div class="row">
            <div class="col-md-5">
              <div class="single-product-slider">
                <div
                  class="carousel slide"
                  data-ride="carousel"
                  id="single-product-slider"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src={props.productImg} alt="" class="img-fluid" />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="assets/images/product-2.jpg"
                        alt=""
                        class="img-fluid"
                      />
                    </div>
                    <div class="carousel-item ">
                      <img
                        src="assets/images/product-1.jpg"
                        alt=""
                        class="img-fluid"
                      />
                    </div>
                  </div>

                  <ol class="carousel-indicators">
                    <li
                      data-target="#single-product-slider"
                      data-slide-to="0"
                      class="active"
                    >
                      <img
                        src="assets/images/product-3.jpg"
                        alt=""
                        class="img-fluid"
                      />
                    </li>
                    <li data-target="#single-product-slider" data-slide-to="1">
                      <img
                        src="assets/images/product-2.jpg"
                        alt=""
                        class="img-fluid"
                      />
                    </li>
                    <li data-target="#single-product-slider" data-slide-to="2">
                      <img
                        src="assets/images/product-1.jpg"
                        alt=""
                        class="img-fluid"
                      />
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div class="col-md-7">
              <div class="single-product-details mt-5 mt-lg-0">
                <h5>{props.productTitle}</h5>
                <div class="sku_wrapper mb-4">
                  SKU: <span class="text-muted">{props.productId} </span>
                </div>

                <hr />

                <h3 class="product-price">{props.productPrice}</h3>

                <p class="product-description my-4 ">{props.productAbout}</p>

                <form class="cart" action="#" method="post">
                  <div class="quantity d-flex align-items-center">
                    <input
                      type="number"
                      id="#"
                      class="input-text qty text form-control w-25 mr-3"
                      step="1"
                      min="1"
                      max="9"
                      name="quantity"
                      value="1"
                      title="Qty"
                      size="4"
                    />
                    <a href="#" class="btn btn-main btn-small">
                      Add to cart
                    </a>
                  </div>
                </form>

                <div class="color-swatches mt-4 d-flex align-items-center">
                  <span class="font-weight-bold text-capitalize product-meta-title">
                    color:
                  </span>
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item">
                      <a routerLink="/product-single" class="bg-info"></a>
                    </li>
                    <li class="list-inline-item">
                      <a routerLink="/product-single" class="bg-dark"></a>
                    </li>
                    <li class="list-inline-item">
                      <a routerLink="/product-single" class="bg-danger"></a>
                    </li>
                  </ul>
                </div>

                <div class="product-size d-flex align-items-center mt-4">
                  <span class="font-weight-bold text-capitalize product-meta-title">
                    Size:
                  </span>
                  <select class="form-control">
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                </div>

                <div class="products-meta mt-4">
                  <div class="product-category d-flex align-items-center">
                    <span class="font-weight-bold text-capitalize product-meta-title">
                      Categories :
                    </span>
                    <a href="#">Products , </a>
                    <a href="#">Soap</a>
                  </div>

                  <div class="product-share mt-5">
                    <ul class="list-inline">
                      <li class="list-inline-item">
                        <a href="#">
                          <i class="tf-ion-social-facebook"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#">
                          <i class="tf-ion-social-twitter"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#">
                          <i class="tf-ion-social-linkedin"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#">
                          <i class="tf-ion-social-pinterest"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-12">
              <nav class="product-info-tabs wc-tabs mt-5 mb-5">
                <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                  <a
                    class="nav-item nav-link active"
                    id="nav-home-tab"
                    data-toggle="tab"
                    href="#nav-home"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    Description
                  </a>
                  <a
                    class="nav-item nav-link"
                    id="nav-profile-tab"
                    data-toggle="tab"
                    href="#nav-profile"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    Additional Information
                  </a>
                  <a
                    class="nav-item nav-link"
                    id="nav-contact-tab"
                    data-toggle="tab"
                    href="#nav-contact"
                    role="tab"
                    aria-controls="nav-contact"
                    aria-selected="false"
                  >
                    Reviews(2)
                  </a>
                </div>
              </nav>

              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <p>
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Vestibulum tortor quam,
                    feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                    eu libero sit amet quam egestas semper. Aenean ultricies mi
                    vitae est. Mauris placerat eleifend leo.
                  </p>

                  <h4>Product Features</h4>

                  <ul class="">
                    <li>
                      Mapped with 3M??? Thinsulate??? Insulation [40G Body / Sleeves
                      / Hood]
                    </li>
                    <li>Embossed Taffeta Lining</li>
                    <li>
                      DRYRIDE Durashell??? 2-Layer Oxford Fabric [10,000MM,
                      5,000G]
                    </li>
                  </ul>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <ul class="list-unstyled info-desc">
                    <li class="d-flex">
                      <strong>Weight </strong>
                      <span>400 g</span>
                    </li>
                    <li class="d-flex">
                      <strong>Dimensions </strong>
                      <span>10 x 10 x 15 cm</span>
                    </li>
                    <li class="d-flex">
                      <strong>Materials</strong>
                      <span>60% cotton, 40% polyester</span>
                    </li>
                    <li class="d-flex">
                      <strong>Color </strong>
                      <span>Blue, Gray, Green, Red, Yellow</span>
                    </li>
                    <li class="d-flex">
                      <strong>Size</strong>
                      <span>L, M, S, XL, XXL</span>
                    </li>
                  </ul>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-contact"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
                >
                  <div class="row">
                    <div class="col-lg-7">
                      <div class="media review-block mb-4">
                        <img
                          src="assets/images/avater-1.jpg"
                          alt="reviewimg"
                          class="img-fluid mr-4"
                        />
                        <div class="media-body">
                          <div class="product-review">
                            <span>
                              <i class="tf-ion-android-star"></i>
                            </span>
                            <span>
                              <i class="tf-ion-android-star"></i>
                            </span>
                            <span>
                              <i class="tf-ion-android-star"></i>
                            </span>
                            <span>
                              <i class="tf-ion-android-star"></i>
                            </span>
                            <span>
                              <i class="tf-ion-android-star"></i>
                            </span>
                          </div>
                          <h6>
                            Therichpost{" "}
                            <span class="text-sm text-muted font-weight-normal ml-3">
                              -June 23, 2019
                            </span>
                          </h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ipsum suscipit consequuntur in, perspiciatis
                            laudantium ipsa fugit. Iure esse saepe error dolore
                            quod.
                          </p>
                        </div>
                      </div>

                      <div class="media review-block">
                        <img
                          src="assets/images/avater-2.jpg"
                          alt="reviewimg"
                          class="img-fluid mr-4"
                        />
                        <div class="media-body">
                          <div class="product-review">
                            <span>
                              <i class="tf-ion-android-star"></i>
                            </span>
                            <span>
                              <i class="tf-ion-android-star"></i>
                            </span>
                            <span>
                              <i class="tf-ion-android-star"></i>
                            </span>
                            <span>
                              <i class="tf-ion-android-star"></i>
                            </span>
                            <span>
                              <i class="tf-ion-android-star-outline"></i>
                            </span>
                          </div>
                          <h6>
                            Therichpost{" "}
                            <span class="text-sm text-muted font-weight-normal ml-3">
                              -June 23, 2019
                            </span>
                          </h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ipsum suscipit consequuntur in, perspiciatis
                            laudantium ipsa fugit. Iure esse saepe error dolore
                            quod.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-5">
                      <div class="review-comment mt-5 mt-lg-0">
                        <h4 class="mb-3">Add a Review</h4>

                        <form action="#">
                          <div class="starrr"></div>
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Your Name"
                            />
                          </div>
                          <div class="form-group">
                            <input
                              type="email"
                              class="form-control"
                              placeholder="Your Email"
                            />
                          </div>
                          <div class="form-group">
                            <textarea
                              name="comment"
                              id="comment"
                              class="form-control"
                              cols="30"
                              rows="4"
                              placeholder="Your Review"
                            ></textarea>
                          </div>

                          <a
                            routerLink="/product-single"
                            class="btn btn-main btn-small"
                          >
                            Submit Review
                          </a>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default SingleProduct;
