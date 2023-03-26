import React from "react";
import style from "./style.module.css";

import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <p>ProductDetail </p>
      <span>{id}</span>
    </div>
  );
};

export default ProductDetail;
