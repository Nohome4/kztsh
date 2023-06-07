import React from "react";
import { Link } from "react-router-dom";

const AboutNavbar = () => {
  return (
    <div className="dropdown">
      <ul>
        <li>
          <Link className="Link">История</Link>
        </li>
        <li>
          <Link className="Link">Отчетность</Link>
        </li>
        <li>
          <Link className="Link">Документы</Link>
        </li>
        <li>
          <Link className="Link">Галерея</Link>
        </li>
        <li>
          <Link className="Link">Отзывы</Link>
        </li>
        <li>
          <Link className="Link">Сотрудники</Link>
        </li>
        <li>
          <Link className="Link">Вакансии</Link>
        </li>
        <li>
          <Link className="Link">Партнеры</Link>
        </li>
        <li>
          <Link className="Link">Реквизиты</Link>
        </li>
      </ul>
    </div>
  );
};

export default AboutNavbar;
