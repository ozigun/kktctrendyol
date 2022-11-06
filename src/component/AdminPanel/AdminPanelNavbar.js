import { Link } from "react-router-dom";

function AdminPanelNavbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
        <Link to="/">
          <a class="navbar-brand mt-2 mt-lg-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
              height="15"
              alt="MDB Logo"
              loading="lazy"
            />
          </a>
        </Link>

        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/admin" class="nav-link">
                Kullanıcılar
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/admin/siparis" class="nav-link">
                Siparişler
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/admin/prices" class="nav-link">
                Fiyatlandırma
              </Link>
            </li>
          </ul>
        </div>

        <div class="d-flex align-items-center ">
          <a class="text-reset me-3" href="#">
            <i class="fas fa-shopping-cart"></i>
          </a>

          <div class="btn-group">
            <button
              type="button"
              class="btn btn-primary dropdown-toggle ml-3 mr-3"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Üye
            </button>
            <div class="dropdown-menu">
              <Link class="dropdown-item" to="/login">
                Giriş
              </Link>
              <Link to="/signup" class="dropdown-item">
                Üye Ol
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default AdminPanelNavbar;
