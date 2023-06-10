import React from "react";
import Header from "../Header";
import { adminRoutes, userRoutes } from "../../store/routes";
import { Routes, Route } from "react-router";
import Footer from "../Footer";

const AppRouter = () => {
  const isAuth = false;
  return (
    <div>
      <Header />
      <Routes>
        {isAuth &&
          adminRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} exact />
          ))}
        {userRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))}
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRouter;
