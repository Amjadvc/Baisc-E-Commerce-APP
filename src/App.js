import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
//3-Router : import Routes Route
import { Routes, Route } from "react-router-dom";
import About from "./Components/About";
import "./App.css";
import ProductDetails from "./Components/ProductDetails";
function App() {
  return (
    <div className="App">
      {/* // 4-Router : here the Navbar is fixed and when the path equl to / show the element Slider and ProductList */}
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage />
            </>
          }
        />
        <Route
          path="about"
          element={
            <>
              <About />
            </>
          }
        />
        {/* ////Product Route:1- :=>dynamic variabel */}
        <Route
          path="product/:productId"
          element={
            <>
              <ProductDetails />
            </>
          }
        />
      </Routes>
    </div>
  );
}
export default App;
