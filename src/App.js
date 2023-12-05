import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import PLannersAndKits from "./Pages/PlannersAndKits";
import ProductDetails from "./components/ProductDetails";
import CurrencyConverter from "./components/CurrencyConverter";
import NewArrivals from "./components/NewArrivals";
import "./fonts.css";
import CartItem from "./components/CartItem";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route index element={<PLannersAndKits />}></Route>
        <Route path="/NewArrivals" element={<NewArrivals />} />
        <Route path="/CartItem" element={<CartItem />} />
      </Routes>
    </Router>
  );
}

export default App;
