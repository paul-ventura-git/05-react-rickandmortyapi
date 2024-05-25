import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Products";
import AllProductsPage from "./pages/AllProductsPage"
import AllCharactersPage from './pages/AllCharactersPage';
import NoPage from './pages/NoPage';
import Layout from './pages/Layout';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/allproducts" element={<AllProductsPage />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/allcharacters" element={<AllCharactersPage />} />
            <Route path="/character/:characterId" element={<Product />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
