import React from "react";
import MainReturnButton from "../../UI/MainReturnButton";
import LeftMenu from "../../UI/LeftMenu";
import "../../styles/Cafe.css";
import { SERVISES_ROUTES } from "../../utils/consts";
const Cafe = () => {
  return (
    <div>
      <h2 className="header-h2">Кафе "Северное"</h2>
      <MainReturnButton />
      <div className="delivery">
        <LeftMenu arr={SERVISES_ROUTES} />
        <div className="delivery-content"></div>
      </div>
    </div>
  );
};

export default Cafe;
