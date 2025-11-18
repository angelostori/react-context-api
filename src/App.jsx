import { BrowserRouter, Routes, Route, useContext } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Product from "./pages/Product";
import { BudgetContext } from "./contexts/BudgetContext";


export default function App() {
  return (
    <BudgetContext.Provider value={"{budgetMode, setBudgetMod}"}>
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
