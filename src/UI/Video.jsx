import React, { useContext, useEffect, useState } from "react";
import ItemContext from "../utils/context";
import { fetchVideo } from "../http/allApi";
import VideoUpload from "./VideoUpload";
const Video = () => {
  const itemsProps = useContext(ItemContext);
  const { video1 } = itemsProps;
  const [autoplay, setAutoplay] = useState(false);
  const [video2, setVideo2] = useState(null);

  const getSecondVideo = async () => {
    try {
      const data = await fetchVideo(2);
      if (data?.error) {
        console.log(data?.error);
      } else {
        setVideo2(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getSecondVideo();
  }, []);

  useEffect(() => {
    const isPageRefreshed = performance.navigation.type === 1;
    if (isPageRefreshed) {
      setAutoplay(false);
    }
    const handleFullScreenChange = () => {
      const isInFullScreen =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement;

      if (!isInFullScreen) {
        document.body.style.overflow = "auto";
      }
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullScreenChange);
    document.addEventListener("mozfullscreenchange", handleFullScreenChange);
    document.addEventListener("MSFullscreenChange", handleFullScreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullScreenChange
      );
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullScreenChange
      );
      document.removeEventListener(
        "MSFullscreenChange",
        handleFullScreenChange
      );
    };
  }, []);
  return (
    <>
      <div className="video">
        <div className="video-description">
          <h1>Наш девиз:</h1>
          <h5 className="video-p">
            "Обеспечение высокого качества продукции, охраны труда, сохранения
            здоровья работников – залог успешного функционирования и постоянного
            развития организации."
          </h5>
          <h1 className="video-description-second-h1">
            Основная цель деятельности:
          </h1>
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
        <div className="videos">
          <div className="video-wrapper">
            <video
              controls
              poster="/images/prew.png"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              autoPlay={autoplay}
              allowFullScreen
              muted
              src={process.env.REACT_APP_API_URL + video1.url}
            ></video>
          </div>
          {video2 && (
            <div className="video-wrapper">
              <video
                controls
                src={process.env.REACT_APP_API_URL + video2.url}
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                autoPlay={autoplay}
                allowFullScreen
                muted
              ></video>
            </div>
          )}
        </div>
      </div>
      <hr className="grid-hr" />
    </>
  );
};

export default Video;
