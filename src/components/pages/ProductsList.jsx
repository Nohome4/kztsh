import React from "react";
import MainReturnButton from "../../UI/MainReturnButton";

import "../../styles/ProductsList.css";
import { items } from "../../utils/consts";
const ProductsList = () => {
  return (
    <div>
      <h2>Каталог продукции</h2>
      <MainReturnButton />
      <div className="product-list">
        <div className="product-content">
          {items.map((el) => (
            <div key={el.id} className="product-card">
              <img
                className="icon-image"
                src={`../../images/product-icons/${el.id}.png`}
                alt="icon"
              ></img>
              <div className="product-card-desc">
                <h3>{el.title}</h3>
                <p>Количество товаров:{el.count}</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Error, culpa!
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
