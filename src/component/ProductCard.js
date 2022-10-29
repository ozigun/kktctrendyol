import { Link } from "react-router-dom";

function ProductCard({ title, img, price, about }) {
  return (
    <div href="#" class="card card-product-grid" style={{ height: 400 }}>
      <Link to={"/singleproduct/" + title} class="img-wrap">
        {" "}
        <img src={img} />{" "}
      </Link>
      <figcaption class="info-wrap">
        <Link to={"/singleproduct/" + title} class="img-wrap title">
          {title}

          <div class="price mt-1">{price}</div>
        </Link>
      </figcaption>
    </div>
  );
}
export default ProductCard;
