import React from "react";
import Product from "./Product";

const Products = (props) => {
  return (
    <div className="products">
      <div className="description">
        <h1>Каталог продукции</h1>
        <p>
          На сайте вы найдете многое: поковки и штамповки, изделия легкой
          промышденности, строительные материалы и т.д. Наша продукция занимает
          лидирующие позиции на рынке Беларуси. Мы уверены в надежности и
          длительном сроке службы и предоставляем гарантию на все товары.
        </p>
        <button>Весь каталог ›</button>
      </div>
      <div className="product-list">
        {props.items.map((el) => (
          <Product key={el.id} item={el} />
        ))}
      </div>
    </div>
  );
};

export default Products;
