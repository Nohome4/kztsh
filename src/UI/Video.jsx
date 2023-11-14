import React from "react";

const Video = () => {
  return (
    <>
      <div className="video">
        <div className="video-description">
          <h2>Наш девиз</h2>
          <h5 className="video-p">
            "Обеспечение высокого качества продукции, охраны труда, сохранения
            здоровья работников – залог успешного функционирования и постоянного
            развития организации."
          </h5>
          <h2>Основная цель деятельности:</h2>
          <h5>
            - обеспечение успеха организации и роста благосостояния всех
            работников на основе производства и поставки потребителям
            качественной продукции, удовлетворяющей их требования;
          </h5>
          <h5>
            - создание здоровых и безопасных условий труда работникам
            организации путем сведения к минимуму причин производственного
            травматизма и профессиональных заболеваний насколько это практически
            осуществимо с учетом характера деятельности организации.
          </h5>
        </div>
        <div className="video-wrapper">
          <iframe
            width="560"
            height="315"
            src={
              process.env.REACT_APP_API_URL +
              "ca92ba9c-980d-4366-a584-efc946c2d462.mp4"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <hr className="grid-hr" />
    </>
  );
};

export default Video;
