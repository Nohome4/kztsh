import React, { useState, useEffect } from "react";
import LeftMenu from "../../UI/LeftMenu";
import MainReturnButton from "../../UI/MainReturnButton";
import { ABOUT_ROUTES } from "../../utils/consts";
import Modal from "../../UI/Modal";
import "../../styles/Galery.css";
import { fetchGalery } from "../../http/allApi";
import Loader from "../../UI/Loader";
import ErrorMessage from "../../UI/Error";

const Galery = () => {
  const [galery, setGalery] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const showModal = (index) => {
    setSelectedImageIndex(index);
  };
  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  useEffect(() => {
    setLoad(true);
    fetchGalery()
      .then((data) => {
        setLoad(false);
        if (data.error) {
          setError(data.error);
        } else {
          setGalery(data);
        }
      })
      .catch((error) => {
        setLoad(false);
        setError(error.message);
      });
  }, [setError]);

  if (error) {
    return <ErrorMessage />;
  }
  return (
    <div>
      <h2 className="header-h2">Галерея</h2>
      <MainReturnButton />
      <div className="galery">
        <LeftMenu arr={ABOUT_ROUTES} />
        {load ? (
          <Loader />
        ) : (
          <div className="galery-content">
            <div className="image-gallery">
              {galery.map((el, index) => (
                <img
                  key={el.id}
                  src={process.env.REACT_APP_API_URL + el.img}
                  alt={el.name}
                  onClick={() => showModal(index)}
                />
              ))}
            </div>

            {selectedImageIndex !== null && (
              <Modal
                images={galery.map((el) => el.img)}
                selectedIndex={selectedImageIndex}
                onClose={closeModal}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Galery;
