import React, { useState } from "react";
import "../../styles/AdminStyles/Login.css";
import { login } from "../../http/allApi";

const Login = ({ setLoggedIn }) => {
  const [load, setLoad] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);
  const [error, setError] = useState(null); // state for tracking error
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoad(true);
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("password", formData.password);

      const response = await login(formDataToSend);
      console.log(response);

      if (response.token) {
        localStorage.setItem("token", response.token);
        setLoggedIn(true);
        setError(null);
        setLoginStatus(true);
      } else {
        setError(response.message);
      }

      setLoad(false);
    } catch (error) {
      setLoad(false);
      // show generic error message or error message from server if available
      setError(error.response.data.message);
      setLoginStatus(false);
      console.error("Вход не выполнен:", error);
    }

    setFormData({
      name: "",
      password: "",
    });
  };
  if (load) {
    return (
      <div className="loader-wrapper">
        <div className="loader"></div>
      </div>
    );
  }
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Авторизация</h2>
        <input
          type="text"
          placeholder="Имя пользователя"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Пароль"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <button type="submit">Войти</button>
      </form>
      {loginStatus && <p>Вход выполнен!</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;


