import React from "react";
import { Link } from "react-router-dom";
const ProductsNavbar = () => {
  return (
    <div className="dropdown">
      <ul>
        <li>
          <Link className="Link">Каталог продукции</Link>
        </li>
        <li>
          <Link className="Link">Прайс листы</Link>
        </li>
        <li>
          <Link className="Link">Магазин</Link>
        </li>
      </ul>
    </div>
  );
};

export default ProductsNavbar;
