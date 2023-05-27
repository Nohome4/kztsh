import React from 'react';
import { Link } from 'react-router-dom';
const ContactsNavbar = (props) => {
    return (
        <div className={props.className}>
        <ul>
          <li>
            <Link className='Link'>Руководство</Link>
          </li>
          <li>
            <Link className='Link'>Команда управления</Link>
          </li>
          <li>
            <Link className='Link'>Отдел маркетинга и сбыта готовой продукции и внешних связей</Link>
          </li>
        </ul>
      </div>
    );
}

export default ContactsNavbar;
