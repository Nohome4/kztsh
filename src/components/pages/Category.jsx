import React from "react";
import { useParams } from "react-router";
import { items } from "../../utils/consts";
import MainReturnButton from "../../UI/MainReturnButton";
import SliderComponent from "../../UI/SliderComponent";
import "../../styles/Category.css";
import IconsLinks from "../../UI/IconsLinks";
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
        <div className="category-slider">
          <SliderComponent images={item.images} />
        </div>
        <div className="category-description">
          <p>{item.description}</p>
          <div className="category-characteristics">
            <h3>Характеристики</h3>
            <table className="category-table">
              <thead></thead>
              <tbody>
                {item.characteristics.map((el) =>
                  el.name !== "" ? (
                    <tr key={el.name}>
                      <td>{el.name}</td>
                      <td>{el.value}</td>
                    </tr>
                  ) : (
                    <p>К сожалению у данного товара пока нет описания</p>
                  )
                )}
              </tbody>
            </table>
          </div>
          <div className="product-page-info">
            Внимание! Кузнечный завод тяжелых штамповок имеет возможность
            изготовления продукции не предтавленной в этом каталоге, по
            индивидуальному заказу.
          </div>
        </div>
      </div>
      <div className="table-characteristics">
        {item.tableCharacteristics ? (
          <table className="category-table">
            <thead>
              {item.tableNameCharacteristics.map((el, index) => (
                <tr>
                  {el.map((value, subIndex) => (
                    <th key={subIndex}>{value}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {item.tableCharacteristics.map((el, index) => (
                <tr key={index}>
                  {el.map((value, subIndex) => (
                    <td key={subIndex}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          ""
        )}
      </div>
      <IconsLinks />
    </div>
  );
};

export default Category;
