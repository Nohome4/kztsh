import React from "react";
import { useParams } from "react-router";
import { items, itemsLeftMenu } from "../../utils/consts";
import MainReturnButton from "../../UI/MainReturnButton";
import LeftMenu from "../../UI/LeftMenu";
import "../../styles/ProductPage.css";
const ProductPage = () => {
  const { productId } = useParams();
  const product = items.find((product) => product.id === Number(productId));
  return (
    <div>
      <h2>{product.title}</h2>
      <MainReturnButton />
      <div className="product-page">
        <LeftMenu arr={itemsLeftMenu} />
        <div className="product-page-content">
          {product.categories ? (
            product.categories.map((category) => (
              <div className="product-page-card" key={category.id}>
                <img
                  className="product-page-card-img"
                  src="/images/product-icons/1.png"
                  alt="1"
                />
                <div className="product-page-card-text">
                  <h3>{category.name}</h3>
                  <hr />
                  <p>{category.description}</p>
                </div>
              </div>
            ))
          ) : (
            <div>Такой категории не существует</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
