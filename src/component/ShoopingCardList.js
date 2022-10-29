import NavBarHeader from "../component/NavBarHeader";
import SearchBox from "../component/SearchBox";

function ShoppingCardList({ title, img, price, about }) {
  return (
    <div class="col-md-3">
      <figure class="card card-product-grid">
        <div class="img-wrap">
          <span class="badge badge-danger"> Yeni </span>
          <img src={img} />
          <a class="btn-overlay" href="#">
            <i class="fa fa-search-plus"></i> İncele
          </a>
        </div>
        <figcaption class="info-wrap">
          <div class="fix-height">
            <a href="#" class="title">
              {title}
            </a>
            <div class="price-wrap mt-2">
              <span class="price">{price}</span>
            </div>
          </div>
          <a href="#" class="btn btn-block btn-primary">
            Add to cart{" "}
          </a>
        </figcaption>
      </figure>
    </div>
  );
}
export default ShoppingCardList;
