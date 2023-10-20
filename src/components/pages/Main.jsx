import { useState, useEffect } from "react";
import "../../App.css";
import FirstPage from "./FirstPage";
import Products from "../Products";
import IconsLinks from "../../UI/IconsLinks";
import { fetchItems } from "../../http/allApi";
import ErrorMessage from "../../UI/Error";
import Loader from "../../UI/Loader";
const Main = () => {
  const [items, setItems] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const localData = localStorage.getItem("items");
    if (localData) {
      setItems(JSON.parse(localData));
    } else {
      setLoad(true);
      fetchItems()
        .then((data) => {
          setLoad(false);
          if (data.error) {
            setError(data.error);
          } else {
            setItems(data);
            localStorage.setItem("items", JSON.stringify(data)); // Save to localStorage.
          }
        })
        .catch((error) => {
          setLoad(false);
          setError(error.message);
        });
    }
  }, []);
  if (error) {
    return <ErrorMessage />;
  }
  return (
    <div>
      <div className="app">
        <FirstPage />
      </div>
      <IconsLinks />
      {load ? <Loader /> : <Products items={items} />}
    </div>
  );
};

export default Main;
