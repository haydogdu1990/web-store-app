import { Routes, Route, Link, NavLink } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProductCategory from "./pages/ProductCategory";
import ProductDetail from "./pages/ProductDetail";

import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

import "./App.css";
import "./style.css";
import "./output.css";

import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import ImageSlider from "./components/ImageSlider";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div data-theme={theme}>
      <Navbar />
      <Menu />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<Layout />}>
          <Route index={true} element={<ProductCategory />} />
          <Route path=":id" element={<ProductDetail />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
