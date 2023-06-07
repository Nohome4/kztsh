import React from "react";
import "./App.css";
import Header from "./components/Header";
import FirstPage from "./components/FirstPage";
import Footer from "./components/Footer";
import PhoneContact from "./components/PhoneContact";
import Products from "./components/Products";
import ButtonUp from "./UI/ButtonUp";

function App() {
  const items = [
    {
      title: "Поковки и штамповки",
      count: "14",
      id: 1,
      image: "../images/products-images/flantsy.jpg",
    },
    {
      title: "Узлы и детали",
      count: "8",
      id: 2,
      image: "../images/products-images/yzli.jpg",
    },
    {
      title: "Запчасти сельхозмашин",
      count: "8",
      id: 3,
      image: "../images/products-images/zapchasty.jpg",
    },
    {
      title: "Изделия легкой промышленности",
      count: "8",
      id: 4,
      image: "../images/products-images/legprom.jpg",
    },
    {
      title: "Пружины",
      count: "1",
      id: 5,
      image: "../images/products-images/pryjini.jpg",
    },
    {
      title: "Строительные материалы",
      count: "2",
      id: 6,
      image: "../images/products-images/stroymat.jpg",
    },
    {
      title: "Товары народного потребления",
      count: "2",
      id: 7,
      image: "../images/products-images/narpotreb.jpg",
    },
    {
      title: "Плитка тротуарная",
      count: "4",
      id: 8,
      image: "../images/products-images/plitka.jpg",
    },
    {
      title: "Фурнитура",
      count: "4",
      id: 9,
      image: "../images/products-images/furnityra.jpg",
    },
  ];
  return (
    <div>
      <div className="app">
        <PhoneContact />
        <Header />
        <FirstPage />
      </div>
      <Products items={items} />
      <Footer />
      <ButtonUp />
    </div>
  );
}

export default App;
