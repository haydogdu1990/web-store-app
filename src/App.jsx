import { Routes, Route, Link, NavLink } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProductCategory from "./pages/ProductCategory";

import "./App.css";
import "./style.css";
import "./output.css";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Buttondd
      </button>

      <button className="btn btn-ghost">Button</button>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ProductCategory" element={<ProductCategory />} />
      </Routes>
    </div>
  );
}

export default App;
