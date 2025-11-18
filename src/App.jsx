import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react"
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Product from "./pages/Product";
import BudgetContext from "./contexts/BudgetContext";


export default function App() {

  const [budgetMode, setBudgetMode] = useState(false)

  return (
    <BudgetContext.Provider value={{ budgetMode, setBudgetMode }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="product/:id" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BudgetContext.Provider>
  );
}
