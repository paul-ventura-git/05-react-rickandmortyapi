import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Products";

function App() {

  return (
    <div className="App">
      <h1>The Rick and Morty api</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<Product />} />
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
