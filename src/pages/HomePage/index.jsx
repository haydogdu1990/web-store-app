import React from "react";
import ImageSlider from "../../components/ImageSlider";

import ProductCard from "../../components/ProductCard";

import Products from "../api";

import style from "./style.module.css";

const HomePage = () => {
  return (
    <div>
      <div
        className={
          style.main +
          " w-full flex flex-row mt-2 max-w-7xl mx-auto card bg-base-100 rounded-box place-items-center border border-stone-400"
        }
      >
        <ImageSlider />
        {/* <ProductCard /> */}
        <Products />
      </div>
    </div>
  );
};

export default HomePage;
