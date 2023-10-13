import React, { useState } from "react";
import "../../styles/AdminStyles/Login.css"; // Подключаем файл со стилями

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ваша логика для отправки данных на сервер или осуществления проверки авторизации
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Авторизация</h2>
        <input
          type="text"
          placeholder="Имя пользователя"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Login;
