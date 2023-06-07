import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductsNavbar from "./navbars/ProductsNavbar";
import AboutNavbar from "./navbars/AboutNavbar";
import InfoNavbar from "./navbars/InfoNavbar";
import ContactsNavbar from "./navbars/ContactsNavbar";

const Navbar = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdownProducts, setShowDropdownProducts] = useState(false);
  const [showDropdownInfo, setShowDropdownInfo] = useState(false);
  const [showDropdownContacts, setShowDropdownContacts] = useState(false);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDropdownProducts = () => {
    setShowDropdownProducts(!showDropdownProducts);
  };

  const handleDropdownInfo = () => {
    setShowDropdownInfo(!showDropdownInfo);
  };
  const handleDropdownContacts = () => {
    setShowDropdownContacts(!showDropdownContacts);
  };

  return (
    <nav className="main-navbar">
      <ul>
        <li onMouseEnter={handleDropdown} onMouseLeave={handleDropdown}>
          <Link className="Link" to="/about">
            О заводе
          </Link>
          {showDropdown && <AboutNavbar />}
        </li>
        <li
          onMouseEnter={handleDropdownProducts}
          onMouseLeave={handleDropdownProducts}
        >
          <Link className="Link" to="/products">
            Продукция
          </Link>
          {showDropdownProducts && <ProductsNavbar />}
        </li>
        <li>
          <Link className="Link" to="/services">
            Услуги
          </Link>
        </li>
        <li onMouseEnter={handleDropdownInfo} onMouseLeave={handleDropdownInfo}>
          <Link className="Link" to="/info">
            Информация
          </Link>
          {showDropdownInfo && <InfoNavbar className={"dropdown"} />}
        </li>
        <li
          onMouseEnter={handleDropdownContacts}
          onMouseLeave={handleDropdownContacts}
        >
          <Link className="Link" to="/contacts">
            Контакты
          </Link>
          {showDropdownContacts && <ContactsNavbar className={"dropdown"} />}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
