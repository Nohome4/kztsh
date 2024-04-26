import React from "react";
import "../styles/MarketingTable.css";
const MarketingTable = (props) => {
  return (
    <div>
      <table className="contacts-table-marketing">
        <thead>
          <tr>
            <th>Должность</th>
            <th>ФИО</th>
            <th className="phone-th">Внутренний телефон</th>
            <th>Телефон</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {props.contactsList.map((el, index) => (
            <tr key={el.job}>
              <td>{el.job} </td>
              <td>{el.name}</td>
              <td>{el.internalPhone}</td>
              <td>{el.phone}</td>
              {index < 6 ? (
                <td>
                  <a href="mailto:kz_omsivs@mail.ru">kz_omsivs@mail.ru</a>
                </td>
              ) : (
                <td>
                  <a href="mailto:ovs.kztsh@gmail.com">ovs.kztsh@gmail.com</a>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarketingTable;
