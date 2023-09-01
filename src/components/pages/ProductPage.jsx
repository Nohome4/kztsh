import React from "react";
import { useParams } from "react-router";
import { items, itemsLeftMenu } from "../../utils/consts";
import MainReturnButton from "../../UI/MainReturnButton";
import LeftMenu from "../../UI/LeftMenu";

const ProductPage = () => {
  const { productId } = useParams();
  const product = items.find((product) => product.id === Number(productId));
  return (
    <div>
      <h2>{product.title}</h2>
      <MainReturnButton />
      <div>
        <LeftMenu arr={itemsLeftMenu} />
        {product.categories ? (
          product.categories.map((category) => (
            <div key={category.id}>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </div>
          ))
        ) : (
          <div>Такой категории не существует</div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
