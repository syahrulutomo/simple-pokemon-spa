import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageRoute from "./page";
import Home from "../pages/home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PageRoute />}>
          <Route exact path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
