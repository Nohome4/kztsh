import "../../App.css";
import FirstPage from "./FirstPage";
import Products from "../Products";
import IconsLinks from "../../UI/IconsLinks";
import ErrorMessage from "../../UI/Error";
import Loader from "../../UI/Loader";
import { useContext, useEffect } from "react";
import ItemContext from "../../utils/context";
import { titleName } from "../../store/routes";
const Main = () => {
  const itemProps = useContext(ItemContext);
  useEffect(() => {
    document.title = "Главная" + titleName;
  }, []);
  const { error, load, items } = itemProps;
  if (error) {
    return <ErrorMessage />;
  }
  if (load) {
    return (
      <div className="loader-wrapper-app">
        <Loader />
      </div>
    );
  }
  return (
    <div>
      <div className="app">
        <FirstPage />
      </div>
      <IconsLinks />
      <Products items={items} />
    </div>
  );
};

export default Main;
