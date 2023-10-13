import React from "react";
import MainReturnButton from "../../UI/MainReturnButton";
import LeftMenu from "../../UI/LeftMenu";
import "../../styles/ProductsList.css";
import { items, itemsLeftMenu } from "../../utils/consts";
import { Link } from "react-router-dom";
const ProductsList = () => {
  return (
    <div>
      <h2 className="header-h2">Каталог продукции</h2>

      <MainReturnButton />

      <div className="product-list">
        <LeftMenu arr={itemsLeftMenu} />
        <div className="product-content">
          {items.map((product) => (
            <Link
              key={product.id}
              className="product-card"
              to={`/products/${product.id}`}
            >
              <div className="product-card-wrapper" key={product.id}>
                <img className="icon-image" src={product.icon} alt="icon"></img>
                <div className="product-card-desc">
                  <h3>{product.title}</h3>
                  <h5>Количество товаров:{product.count}</h5>
                  <p>{product.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
