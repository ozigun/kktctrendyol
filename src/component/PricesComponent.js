import React from "react";
import { Link } from "react-router-dom";

function PricesComponent() {
  return (
    <div class="alert alert-primary mt-5 mr-5 ml-5" role="alert">
      <h4 class="alert-heading">Ücretlendirme</h4>
      <p class="mr-5 ml-5">
        Aramış olduğunuz ürünün orjinal site ücreti + Gümrük Bedeli + Türkiye
        Kargo Ücreti + Kıbrıs'a Kargo Ücreti + Kar Oranı = Satış Fiyatı
      </p>
      <hr />
      <div class="mb-0">
        <Link to="/signup">
          <button type="button" class="btn btn-primary btn-lg btn-block">
            Hemen Üye Ol!
          </button>
        </Link>
      </div>
    </div>
  );
}
export default PricesComponent;
