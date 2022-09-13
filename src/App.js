import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import FeaturedProduct from "./Pages/FeaturedProduct/FeaturedProduct";
import RecentProducts from "./Pages/RecentProduct/RecentProducts";
import CovidBanner from "./Pages/CovidBanner/CovidBanner";
import "../src/Pages/Home/HomeCSS/Custom.css";

function App() {
  return (
    <div className="App">
      <Home />
      <FeaturedProduct />
      <RecentProducts />
      <CovidBanner />
    </div>
  );
}

export default App;
