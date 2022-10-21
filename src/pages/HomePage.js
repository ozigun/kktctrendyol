import Application from "../component/Application";
import Banner from "../component/Banner";
import Footer from "../component/Footer";
import NavBarHeader from "../component/NavBarHeader";
import Products from "../component/Products";

function HomePage() {
  return (
    <div className="App">
      <NavBarHeader />
      <Banner />
      <Products />
      <Application />
      <Footer />
    </div>
  );
}
export default HomePage;
