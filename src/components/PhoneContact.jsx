import React, { useState } from 'react';
import { FaPhone} from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../styles/PhoneContact.css'





const PhoneContact = () => {
    const [showDropdownPhone, setShowDropdownPhone] = useState(false)
    const handleDropdownPhone = () => {
      setShowDropdownPhone(!showDropdownPhone);
    }
    return (
        <div className='phone-contact'>
           <ul  onMouseEnter={handleDropdownPhone} onMouseLeave={handleDropdownPhone}>
           <p><FaPhone/>+375 1775 2-44-22 ↓</p>
            {showDropdownPhone && (
              <ul>
                <li>
                 <h6>Бюро внешних связей</h6>
                </li>
                <li>
                +375 1775 2-44-00
                <h6>Приемная</h6>
                </li>
                <li>
                kztsh@mail.ru
                <h6>E-mail</h6>
                </li>
                <li>
                Ул. Кузнечная 26,
                222161 г. Жодино
                <h6>Адрес</h6>
                </li>
                <li>
                Пн-Пт: 7.30 - 16.30
                <h6>Время работы</h6>
                </li>
                </ul>
          )}
           </ul>
        </div>
    );
}

export default PhoneContact;
