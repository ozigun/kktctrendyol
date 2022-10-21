function NavBarHeader() {
  return (
    <div className="NavBarHeader">
      <header class="section-header">
        <section class="header-main border-bottom">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-2 col-4">KKTC TRENDYOL</div>
              <div class="col-lg-6 col-sm-12">
                <form action="#" class="search">
                  <div class="input-group w-100">
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
              <div class="col-lg-4 col-sm-6 col-12">
                <div class="widgets-wrap float-md-right">
                  <div class="widget-header  mr-3">
                    <a href="#" class="icon icon-sm rounded-circle border">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                    <span class="badge badge-pill badge-danger notify">0</span>
                  </div>
                  <div class="widget-header icontext">
                    <a href="#" class="icon icon-sm rounded-circle border">
                      <i class="fa fa-user"></i>
                    </a>
                    <div class="text">
                      <span class="text-muted">Hoş Geldiniz!</span>
                      <div>
                        <a href="#">Giriş Yap</a> |<a href="#"> Üye Ol</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <nav class="navbar navbar-main navbar-expand-lg navbar-light border-bottom">
          <div class="container">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#main_nav"
              aria-controls="main_nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="main_nav">
              <ul class="navbar-nav mx-auto">
                <li class="nav-item dropdown">
                  <a class="nav-link" href="#">
                    Benim İçin Al
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Paket Yönlendirme
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Nasıl Çalışır
                  </a>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                  >
                    {" "}
                    More
                  </a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">
                      Foods and Drink
                    </a>
                    <a class="dropdown-item" href="#">
                      Home interior
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">
                      Category 1
                    </a>
                    <a class="dropdown-item" href="#">
                      Category 2
                    </a>
                    <a class="dropdown-item" href="#">
                      Category 3
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
export default NavBarHeader;
