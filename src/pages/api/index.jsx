import { useContext, useEffect, useState } from "react";

import ProductCard from "../../components/ProductCard";
import axios from "axios";
import styles from "./styles.module.css";

import { ProductContext } from "../../context/ProductContext";

const Products = () => {
  const { products, setProducts } = useContext(ProductContext);

  //const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    await setProducts(response.data.products);
  };

  useEffect(() => {
    fetchData();
    // products.map((product) => {
    //   setGlobalProducts((state) => [...state, product.title]);
    // });
  }, []);

  return (
    <div className={styles.container}>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
