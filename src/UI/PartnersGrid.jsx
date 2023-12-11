import React from "react";
import "../styles/PartnersGrid.css";
import { Link } from "react-router-dom";
const PartnersGrid = () => {
  return (
    <div className="partners-grid-wrapper">
      <h2>Наши партнеры</h2>
      <div className="partners-grid">
        <div className="partners-child-grid partners-grid-1">
          <div className="shadow">
            <Link className="partners-grid-link" to="https://amkodor.by/">
              <img
                className="amkodor"
                src="/images/partners-images/amkodor.svg"
                alt="amkodor"
              />
            </Link>
          </div>
        </div>
        <div className="partners-child-grid partners-grid-2">
          <div className="shadow">
            <Link
              className="partners-grid-link"
              to="https://belarus-tractor.com/"
            >
              <img
                className="belarus"
                src="/images/partners-images/belarus.svg"
                alt="belarus"
              />
            </Link>
          </div>
        </div>
        <div className="partners-child-grid partners-grid-3">
          <div className="shadow">
            <Link className="partners-grid-link" to="https://belaz.by/">
              <img
                className="belaz"
                src="/images/partners-images/belaz.svg"
                alt="belaz"
              />
            </Link>
          </div>
        </div>
        <div className="partners-child-grid partners-grid-4">
          <div className="shadow">
            <Link className="partners-grid-link" to="https://maz.by/">
              <img
                className="maz"
                src="/images/partners-images/maz.svg"
                alt="maz"
              />
            </Link>
          </div>
        </div>
        <div className="partners-child-grid partners-grid-5">
          <div className="shadow">
            <Link className="partners-grid-link" to="http://www.moaz.ru/">
              <img
                className="moaz"
                src="/images/partners-images/moaz.png"
                alt="moaz"
              />
            </Link>
          </div>
        </div>
        <div className="partners-child-grid partners-grid-6">
          <div className="shadow">
            <Link className="partners-grid-link" to="https://mzkt.by/">
              <img
                className="volat"
                src="/images/partners-images/volat.svg"
                alt="volat"
              />
            </Link>
          </div>
        </div>
      </div>
      <hr className="partners-grid-hr" />
    </div>
  );
};

export default PartnersGrid;
