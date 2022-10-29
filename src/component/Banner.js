function Banner() {
  return (
    <div className="App mt-3 ">
      <section class="section-main bg padding-y">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active ">
              <img
                class="d-block w-100"
                src="assets/imagesMarka/unnamed.png"
                alt="First slide"
                style={{ height: 300 }}
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="assets/imagesMarka/trendyol.png"
                alt="Second slide"
                style={{ height: 300 }}
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="assets/imagesMarka/trendyol.png"
                alt="Third slide"
                style={{ height: 300 }}
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </section>
    </div>
  );
}
export default Banner;
