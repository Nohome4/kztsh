import React, { useEffect, useState } from "react";
import {
  deleteItems,
  fetchItems,
  addItems,
  deleteCategory,
  deleteCharacteristics,
  deleteTableCharacteristics,
} from "../../http/allApi";
import "../../styles/AdminStyles/NewsAdmin.css";
import CategoryAdmin from "./CategoryAdmin";
import TableCharacteristicsAdmin from "./TableCharacteristicsAdmin";
import CharacteristicsAdmin from "./CharacteristicsAdmin";

const ItemsAdmin = () => {
  const [items, setItems] = useState([]);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [characteristicsOpen, setCharacteristicsOpen] = useState(false);
  const [tableCharacteristicOpen, setTableCharacteristicsOpen] =
    useState(false);
  const [categoryStates, setCategoryStates] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    image: null,
  });

  useEffect(() => {
    fetchItems().then((data) => {
      setItems(data);
      const initialCategoryStates = {};
      data.forEach((el) => {
        initialCategoryStates[el.id] = false;
      });

      setCategoryStates(initialCategoryStates);
    });
  }, []);

  const renderItems = async () => {
    const updatedItems = await fetchItems();
    setItems(updatedItems);
  };

  const rerenderingItems = async (id) => {
    await deleteItems(id);
    const updatedItems = await fetchItems();
    setItems(updatedItems);
  };
  const rerenderingCategory = async (id) => {
    await deleteCategory(id);
    const updatedItems = await fetchItems();
    setItems(updatedItems);
  };

  const rerenderingTableCharacteristics = async (id) => {
    await deleteTableCharacteristics(id);
    const updatedItems = await fetchItems();
    setItems(updatedItems);
  };

  const rerenderingCharacteristics = async (id) => {
    await deleteCharacteristics(id);
    const updatedItems = await fetchItems();
    setItems(updatedItems);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();

      // Добавляем данные из state в объект FormData
      formDataToSend.append("title", formData.title);
      formDataToSend.append("image", formData.image);
      await addItems(formDataToSend);
      setFormData({
        title: "",
        image: null,
      });

      const updatedItems = await fetchItems();
      setItems(updatedItems);
    } catch (error) {
      console.error("Ошибка при добавлении продукции:", error);
    }
  };

  const toggleCategory = (categoryId) => {
    setCategoryStates((prevStates) => ({
      ...prevStates,
      [categoryId]: !prevStates[categoryId],
    }));
  };

  return (
    <div className="admin-content">
      <h2>Создать новую продукцию</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Название:
          <input
            type="text"
            name="title"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Изображение:
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
        <br />
        <button type="submit">Создать продукцию</button>
      </form>
      <div className="admin-content">
        {items.map((el) => (
          <div className="item-admin" key={el.id}>
            <h3>Наименование продукции: {el.title}</h3>
            <img src={process.env.REACT_APP_API_URL + el.image} alt={el.name} />
            <button className="red-btn" onClick={() => rerenderingItems(el.id)}>
              Удалить продукцию
            </button>
            <button onClick={() => toggleCategory(el.id)}>
              {categoryStates[el.id]
                ? "Закрыть категории"
                : "Открыть категории"}
            </button>
            {categoryStates[el.id] &&
              el.categories.map((category) => (
                <div className="category-admin" key={category.id}>
                  <h3>Наименование категории: {category.name}</h3>
                  <p>Описание категории: {category.description}</p>
                  {category.images.map((img) => (
                    <img
                      className="category-img"
                      key={img}
                      src={process.env.REACT_APP_API_URL + img}
                      alt={category.name}
                    />
                  ))}
                  <hr />

                  <div className="category-characteristics">
                    <h3>Характеристики</h3>
                    <table className="category-table">
                      <thead></thead>
                      <tbody>
                        {category.characteristics.map((characteristics) => (
                          <tr key={characteristics.name}>
                            <td>{characteristics.name}</td>
                            <td>{characteristics.value}</td>
                            <button
                              className="red-btn"
                              onClick={() =>
                                rerenderingCharacteristics(characteristics.id)
                              }
                            >
                              Удалить характеристику
                            </button>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <button
                      className="characteristics-btn"
                      onClick={() =>
                        setCharacteristicsOpen(!characteristicsOpen)
                      }
                    >
                      {characteristicsOpen
                        ? "Скрыть"
                        : "Добавить характеристику"}
                    </button>
                    {characteristicsOpen && (
                      <CharacteristicsAdmin
                        id={category.id}
                        renderItems={renderItems}
                      />
                    )}
                  </div>
                  <hr />

                  <div className="category-characteristics">
                    <h3>Характеристики в таблице</h3>
                    <table className="category-table">
                      <thead></thead>
                      <tbody>
                        {category.tableCharacteristics.map(
                          (tableCharacteristics) => (
                            <tr key={tableCharacteristics.name}>
                              <td>{tableCharacteristics.name}</td>
                              <td>{tableCharacteristics.value}</td>
                              <button
                                className="red-btn"
                                onClick={() =>
                                  rerenderingTableCharacteristics(
                                    tableCharacteristics.id
                                  )
                                }
                              >
                                Удалить характеристику
                              </button>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                    <button
                      className="characteristics-btn"
                      onClick={() =>
                        setTableCharacteristicsOpen(!tableCharacteristicOpen)
                      }
                    >
                      {tableCharacteristicOpen
                        ? "Скрыть"
                        : "Добавить характеристику в таблицу"}
                    </button>
                    {tableCharacteristicOpen && (
                      <TableCharacteristicsAdmin
                        id={category.id}
                        renderItems={renderItems}
                      />
                    )}
                  </div>
                  <hr />
                  <button
                    className="red-btn"
                    onClick={() => rerenderingCategory(category.id)}
                  >
                    Удалить категорию
                  </button>
                </div>
              ))}
            <button onClick={() => setCategoryOpen(!categoryOpen)}>
              Добавить категорию
            </button>
            {categoryOpen && (
              <CategoryAdmin id={el.id} renderItems={renderItems} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsAdmin;
