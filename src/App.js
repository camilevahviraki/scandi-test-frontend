import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/productsPage/Products";
import AddProduct from "./components/addProduct/addProduct";
import Footer from "./components/footer/Footer";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/add_product" element={<AddProduct />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
