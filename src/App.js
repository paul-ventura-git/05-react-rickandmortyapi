import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductById from "./pages/ProductById";
import CharacterById from './pages/CharacterById';
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
            <Route path="/allproducts"            element={<AllProductsPage />} />
            <Route path="/product/:productId"     element={<ProductById />} />
            <Route path="/allcharacters"          element={<AllCharactersPage />} />
            <Route path="/character/:characterId" element={<CharacterById />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
