import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const Provider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //Runs on the first render (İlk işlemde çalışır)
    //And any time any dependency value changes (ve belirtilen değerler değiştiğinde çalışır)
  }, []);

  const data = {
    products,
    setProducts,
  };
  return (
    <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
  );
};

export default Provider;
