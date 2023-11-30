import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import PLannersAndKits from "./Pages/PlannersAndKits";
import ProductDetails from "./components/ProductDetails";
import CurrencyConverter from "./components/CurrencyConverter";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route index element={<PLannersAndKits />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
