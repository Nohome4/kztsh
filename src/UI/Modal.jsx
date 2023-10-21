import React from "react";

const Modal = ({ images, selectedIndex, onClose }) => {
  const selectedImage = images[selectedIndex];

  return (
    <div className="modal fullscreen" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img
          src={process.env.REACT_APP_API_URL + selectedImage}
          alt={selectedImage}
        />
        <span className="close" onClick={onClose}>
          &times;
        </span>
      </div>
    </div>
  );
};

export default Modal;
