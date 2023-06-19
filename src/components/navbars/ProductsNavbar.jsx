import React from "react";
import { Link } from "react-router-dom";
import { PRODUCTS_ROUTES } from "../../utils/consts";
const ProductsNavbar = () => {
  return (
    <div className="dropdown">
      <ul>
        {PRODUCTS_ROUTES.map((el) => (
          <li>
            <Link className="Link" to={el.path} key={el.name}>
              {el.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsNavbar;
