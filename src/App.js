import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import Buynow from "./Components/Buynow/Buynow";
import Modal from "./Components/Modal/Modal";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/product" element={<ProductDetail />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/Buynow" element={<Buynow />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
