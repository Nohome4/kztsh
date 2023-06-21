import React from "react";

import { CONTACTS_ROUTES, directorContacts } from "../../utils/consts";
import MainReturnButton from "../../UI/MainReturnButton";
import LeftMenu from "../../UI/LeftMenu";
import "../../styles/Contacts.css";
import DirectorsContacts from "../ContactsTable";
const Contacts = () => {
  return (
    <div className="contacts">
      <h2>Контакты</h2>
      <MainReturnButton />
      <div className="contacts-container">
        <LeftMenu arr={CONTACTS_ROUTES} />
        <div className="contacts-content">
          <DirectorsContacts contactsList={directorContacts} />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
