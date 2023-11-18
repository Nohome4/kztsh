import React from "react";
import Slider from "react-slick";

const Modal = ({ images, selectedIndex, onClose }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="modal fullscreen" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <Slider className="slider-wrap" {...settings}>
          {images.map((el, index) => (
            <img
              className="slider-img"
              key={el}
              src={process.env.REACT_APP_API_URL + el}
              alt="category"
            />
          ))}
        </Slider>
        <span className="close" onClick={onClose}>
          &times;
        </span>
      </div>
    </div>
  );
};

export default Modal;
