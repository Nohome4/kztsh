import React from "react";
import { useParams } from "react-router";
import { items } from "../../utils/consts";
import MainReturnButton from "../../UI/MainReturnButton";
import SliderComponent from "../../UI/SliderComponent";
import "../../styles/Category.css";
const Category = () => {
  const { productId } = useParams();
  const { categoryId } = useParams();

  const categoryObj = items.find((el) => el.id === Number(productId));

  const item = categoryObj.categories.find(
    (item) => item.id === Number(categoryId)
  );
  return (
    <div>
      <h2 className="header-h2">{item.name}</h2>
      <MainReturnButton />
      <div className="category">
        <SliderComponent images={item.images} />
        <p>{item.description}</p>
        {/* {item.images.map((el) => (
          <img className="slider-img" key={el} src={el} alt={item.name} />
        ))} */}
        {item.characteristics.map((el) => (
          <div key={el.id}>
            <p>{el.name}</p>
            <p>{el.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
