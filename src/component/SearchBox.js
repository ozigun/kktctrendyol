import { Link } from "react-router-dom";

function SearchBox() {
  return (
    <div className="NavBarHeader justify-content-between ">
      <div class="container mt-3">
        <div class="row align-items-center">
          <div class="col-lg-6 col-sm-12 mx-auto">
            <form action="#" class="search ">
              <div class="input-group w-100 ">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Lütfen almak istediğiniz ürünün linkini buraya yapıştırın"
                />
                <div class="input-group-append">
                  <button class="btn btn-primary" type="submit">
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SearchBox;
