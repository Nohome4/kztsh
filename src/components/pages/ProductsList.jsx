import React from "react";
import MainReturnButton from "../../UI/MainReturnButton";
import LeftMenu from "../../UI/LeftMenu";
import "../../styles/ProductsList.css";
import { Link } from "react-router-dom";
const ProductsList = () => {
  const localData = localStorage.getItem("items");
  const items = JSON.parse(localData);
  const itemsLeftMenu = items.map((el) => {
    return {
      name: el.title,
      path: `/products/${el.id}`,
    };
  });
  console.log(items);
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
                <img
                  className="icon-image"
                  src={process.env.REACT_APP_API_URL + product.icon}
                  alt="icon"
                ></img>
                <div className="product-card-desc">
                  <h3>{product.title}</h3>
                  <h5>Количество товаров: {product.categories.length}</h5>
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
