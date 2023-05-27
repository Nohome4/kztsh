import React from 'react';
import { Link } from 'react-router-dom';
const InfoNavbar = (props) => {

    return (
        <div className={props.className}>
        <ul>
          <li>
            <Link className='Link'>Доставка</Link>
          </li>
          <li>
            <Link className='Link'>Противодействие коррупции</Link>
          </li>
          <li>
            <Link className='Link'>Новости</Link>
          </li>
          <li>
            <Link className='Link'>Обращения граждан</Link>
          </li>
          <li>
            <Link className='Link'>Товаропроводящая сеть</Link>
          </li>
        </ul>
      </div>
    );
}

export default InfoNavbar;
