import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import PLannersAndKits from "./Pages/PlannersAndKits";
import ProductDetails from "./components/ProductDetails";
import CurrencyConverter from "./components/CurrencyConverter";
function App() {
  return (
    <div className="App">
      <ProductDetails />
      {/* <PLannersAndKits /> */}

      {/* <CurrencyConverter /> */}
    </div>
  );
}

export default App;
