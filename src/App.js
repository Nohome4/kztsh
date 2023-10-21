import React from "react";
import "./App.css";
import AppRouter from "./components/pages/AppRouter";
import { BrowserRouter, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchItems } from "./http/allApi";
import ItemContext from "./utils/context";
function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };
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
          console.error(data.error);
        } else {
          const dataStr = JSON.stringify(data);
          if (dataStr !== localData) {
            localStorage.setItem("items", dataStr); // Save to localStorage if data changed.
          }
          setItems(data); // Always update state, either it is from fetch or local storage.
        }
      } catch (error) {
        setError(error.toString());
        console.error(error.toString());
        if (localData) {
          setItems(JSON.parse(localData)); // pull items from local storage if there was an error and data is available
        }
      } finally {
        setLoad(false);
      }
    };
    fetchData();
  }, []);

  const itemProps = { items, load, error };
  return (
    <ItemContext.Provider value={itemProps}>
      <BrowserRouter>
        <ScrollToTop />
        <AppRouter />
      </BrowserRouter>
    </ItemContext.Provider>
  );
}

export default App;
