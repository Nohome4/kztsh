import React, { useState, useEffect } from "react";
import MainReturnButton from "../../UI/MainReturnButton";
import LeftMenu from "../../UI/LeftMenu";
import { SERVISES_ROUTES } from "../../utils/consts";
import "../../styles/Hostel.css";
import { fetchGalery } from "../../http/allApi";
import ErrorMessage from "../../UI/Error";
import CafeSlider from "../../UI/CafeSlider";
const Hostel = () => {
  const [galery, setGalery] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cachedGaleryData = localStorage.getItem("galery");
    if (cachedGaleryData) {
      return setGalery(JSON.parse(cachedGaleryData));
    }
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
  }, []);
  if (error) {
    return <ErrorMessage />;
  }

  const hostelGalery = [];

  if (galery) {
    for (let i = 0; i <= galery.length - 1; i++) {
      if (galery[i].name === "Общежитие") {
        hostelGalery.push(galery[i]);
      }
    }
  }

  return (
    <div>
      <h2 className="header-h2">Общежитие</h2>
      <MainReturnButton />
      <div className="hostel">
        <LeftMenu arr={SERVISES_ROUTES} />
        {!load && (
          <div className="hostel-content">
            <div className="hostel-content-desc">
              <div className="hostel-content-adress">
                <div>
                  <h3>Адрес</h3>
                  <h5>ул. 50 лет Октября, д. 5</h5>
                </div>
                <div>
                  <h3>График работы</h3>
                  <h5>Ежедневно с 6.00 до 2.00</h5>
                </div>
                <div>
                  <h3>Контактый телефон</h3>
                  <h5>8-10-375-1775-2-45-07</h5>
                </div>
              </div>
              <div className="hostel-map">
                <iframe
                  title="hostel-map"
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A660ed3049520281bae14b684f9761f81e17b0f073e32d94d1944d943c1664836&amp;source=constructor"
                  frameborder="0"
                ></iframe>
              </div>
            </div>
            <p>
              Важным аспектом нашего завода является оказание поддержки
              иногородним работникам в поиске места для проживания. Мы
              предлагаем специальное общежитие, которое доступно всем нашим
              сотрудникам, приезжающим из других городов. Общежитие
              предоставляется в качестве разумного и удобного варианта жилья,
              позволяющего нашим работникам сосредоточиться на работе и
              уменьшить сложности, связанные с поиском жилья.
            </p>
            <div className="hostel-camp">
              <div className="hostel-slider">
                <CafeSlider images={hostelGalery} />
              </div>
              <p>
                Если у вас возникли вопросы относительно процесса заселения в
                общежитие, мы рекомендуем обратиться к нам по контактному
                телефону. Наши сотрудники будут рады помочь вам и предоставить
                полную информацию о доступности, условиях проживания и
                необходимых документах. Мы стремимся сделать проживание в нашем
                общежитии комфортным и удобным для всех наших иногородних
                сотрудников, с учетом их потребностей и предпочтений.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hostel;
