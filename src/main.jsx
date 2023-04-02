import React, { useContext } from "react";
import ThemeProvider from "./context/ThemeContext";
import ProductProvider from "./context/ProductContext";

import { BrowserRouter } from "react-router-dom";

import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductProvider>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </ProductProvider>
  </React.StrictMode>
);
