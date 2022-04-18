import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageRoute from "./page";
import Home from "../pages/home";
import { Details } from "../pages/details";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PageRoute />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/details/:name" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
