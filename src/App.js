import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Products";
import AllProductsPage from "./pages/AllProductsPage"
import NoPage from './pages/NoPage';

function App() {

  return (
    <div className="App">
      <h1>The Rick and Morty api</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allproducts" element={<AllProductsPage />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/allcharacters" element={<AllProductsPage />} />
          <Route path="/character/:characterId" element={<Product />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
