import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { publicRoutes } from "../../../data/router";
import { HOME_ROUTE } from "../../../data/router/utils/utils_publicRoutes";
import PageHome from "../pages/PageHome";
import Layout from "./Layout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_ROUTE} element={<Layout />}>
          <Route index element={<PageHome />} />
          {publicRoutes.map(({ path, Component }) => (
            <Route path={path} element={<Component />} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
