import { useContext } from "react";
import img from "../../images/stock/photo-1606107557195-0e29a4b5b4aa.jpg";
import { Link } from "react-router-dom";

import style from "./style.module.css";

const ProductCard = ({ product }) => {
  return (
    <div>
      {/* <div className={style.card}>
        <img src={product.thumbnail} alt="" />

        <h3 className={style.title}>{product.title}</h3>
        <p className={style.price}>{product.price} $</p>
        <p className={style.description}>{product.description}</p>
        <Link className={style.button} to={`/product/${product.id}`}>
          Add to Cart
        </Link>
      </div> */}

      <div className={style.flex + " w-full "}>
        <div className={style.card + " card w-96 bg-base-100 shadow-xl"}>
          <figure>
            <img src={product.thumbnail} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            <p>{product.description}</p>
            <div className="card-actions justify-end">
              <Link to={`/product/${product.id}`}>
                <button className="btn btn-primary">Detay</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
