import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { productList } from "../productList";

function Products() {
  return (
    <div className="App">
      <section class="section-name padding-y-sm">
        <div class="container">
          <header class="section-heading">
            <Link to="/shopping" class="btn btn-outline-primary float-right">
              Hepsini Gör
            </Link>
            <h3 class="section-title">Popüler Ürünler</h3>
          </header>
          <div class="row">
            {productList.map((user, i) => {
              return (
                <div class="col-md-3">
                  <ProductCard
                    key={i}
                    id={productList[i].id}
                    title={productList[i].title}
                    img={productList[i].img}
                    price={productList[i].price}
                    about={productList[i].about}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
export default Products;
