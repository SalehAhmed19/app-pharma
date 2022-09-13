import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import FeaturedProduct from "./Pages/FeaturedProduct/FeaturedProduct";
import RecentProducts from "./Pages/RecentProduct/RecentProducts";

function App() {
  return (
    <div className="App">
      <Home />
      <FeaturedProduct />
      <RecentProducts />
    </div>
  );
}

export default App;
