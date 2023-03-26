import ProductCard from "../../components/ProductCard";
import axios from "axios";
import styles from "./styles.module.css";
// import { GlobalContext } from "../../Context/GlobalState";
import { useContext, useEffect, useState } from "react";

const Products = () => {
  //   const { setGlobalProducts } = useContext(GlobalContext);
  const [products, setProducts] = useState([]);

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
      {products.map((product, idx) => (
        <div>
          <ProductCard product={product} key={idx} />
        </div>
      ))}
    </div>
  );
};

export default Products;
