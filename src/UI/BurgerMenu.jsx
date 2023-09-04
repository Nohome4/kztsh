import React from "react";
import { slide as Menu } from "react-burger-menu";
import { MAIN_ROUTES } from "../utils/consts";
import { Link } from "react-router-dom";

const BurgerMenu = () => {
  return (
    <div>
      <Menu
        className="myMenu"
        customBurgerIcon={<img src="/images/burger-icon.svg" alt="icon" />}
      >
        {MAIN_ROUTES.map((el) => (
          <Link key={el.path} to={el.path}>
            {el.name}
          </Link>
        ))}
      </Menu>
    </div>
  );
};

export default BurgerMenu;
