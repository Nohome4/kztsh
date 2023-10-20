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
    const fetchData = async () => {
      const localData = localStorage.getItem("items");
      setLoad(true);
      try {
        const data = await fetchItems();
        if (data.error) {
          setError(data.error);
        } else {
          const dataStr = JSON.stringify(data);
          if (dataStr === localData) {
            setItems(JSON.parse(localData));
          } else {
            setItems(data);
            localStorage.setItem("items", dataStr); // Save to localStorage.
          }
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoad(false);
      }
    };
    fetchData();
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
