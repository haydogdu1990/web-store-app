import { useContext, useEffect, useState } from "react";
import axios from "axios";
import style from "./style.module.css";

import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const fetchData = async () => {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    await setProduct(response.data);
  };

  useEffect(() => {
    fetchData();
    console.log(product.title);
    // products.map((product) => {
    //   setGlobalProducts((state) => [...state, product.title]);
    // });
  }, []);

  return (
    <div>
      <p>ProductDetail </p>
      <span>
        {id} - {product.title}
      </span>

      {/* {product.map((pr, idx) => (
        <div>{pr}</div>
      ))} */}
    </div>
  );
};

export default ProductDetail;
