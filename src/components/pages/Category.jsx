import React, { useState } from "react";
import { useParams } from "react-router";

import MainReturnButton from "../../UI/MainReturnButton";
import SliderComponent from "../../UI/SliderComponent";
import "../../styles/Category.css";
import IconsLinks from "../../UI/IconsLinks";
import { CSSTransition } from "react-transition-group";
import { useRef } from "react";

const Category = () => {
  const itemsJSON = localStorage.getItem("items");
  const items = JSON.parse(itemsJSON);
  const { productId } = useParams();
  const { categoryId } = useParams();

  const categoryRef = useRef(null);
  const [showTable, setShowTable] = useState(false);
  const toggleTable = () => {
    setShowTable(!showTable);
  };

  const categoryObj = items.find((el) => el.id === Number(productId));

  const item = categoryObj.categories.find(
    (item) => item.id === Number(categoryId)
  );
  console.log(item);
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
      {item.tableCharacteristics ? (
        <div className="table-characteristics">
          {item.tableCharacteristics && item.tableNameCharacteristics ? (
            <div className="category-table-container">
              <button className="category-button" onClick={toggleTable}>
                Все характеристики ⮟
              </button>
              <CSSTransition
                in={showTable}
                timeout={10}
                classNames="category-table"
                unmountOnExit
                nodeRef={categoryRef}
              >
                <table className="category-table">
                  <thead>
                    {item.tableNameCharacteristics.map((obj) => (
                      <tr key={obj.id}>
                        {obj.name.map((value, subIndex) => (
                          <th key={subIndex}>{value}</th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody>
                    {item.tableCharacteristics.map((obj) => (
                      <tr key={obj}>
                        {obj.name.map((value, subIndex) => (
                          <td key={subIndex + value}>{value}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CSSTransition>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
      <IconsLinks />
    </div>
  );
};

export default Category;
