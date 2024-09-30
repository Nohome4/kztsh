import React, { useEffect } from "react";
import LeftMenu from "../../UI/LeftMenu";
import { ABOUT_ROUTES } from "../../utils/consts";
import MainReturnButton from "../../UI/MainReturnButton";
import "../../styles/Documents.css";
import { titleName } from "../../store/routes";
const Documents = () => {
  useEffect(() => {
    document.title = "Документы" + titleName;
  }, []);
  return (
    <div>
      <h2 className="header-h2">Документы</h2>
      <MainReturnButton />
      <div className="documents">
        <LeftMenu arr={ABOUT_ROUTES} />
        <div className="documents-content">
          <img
            className="big-img"
            src="../../images/documents-images/politika_v_oblasti_kachestva_2022_1.jpg"
            alt="documents-img"
          />
          <img
            className="big-img"
            src="../../images/documents-images/sertificat_2021_eng.jpg"
            alt="documents-img"
          />
          {/* Картинка нового дока */}
          <img
            style={{ width: "70%" }}
            className="big-img"
            src="../../images/documents-images/anticorruption.jpg"
            alt="documents-img"
          />
          {/* Картинка нового дока */}
          <h3 className="documents-h3">Нормативные документы:</h3>
          <div className="documents-a">
            <a
              className="img-link"
              href="../../pdf/Руководство по качеству для поставщиков.pdf
              "
            >
              <img
                className="pdf-img"
                src="../../images/pdf-blue.png"
                alt="pdf"
              />
            </a>
            <a
              className="documents-link"
              href="../../pdf/Руководство по качеству для поставщиков.pdf"
            >
              Руководство по качеству для поставщиков ОАО "КЗТШ"
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
