import React, {lazy, Suspense} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PageRoute from "./page";
import history from "../history";
import {Loader} from "../components/atom/loader";

const Home = lazy(() => import("../pages/home"));
const Details = lazy(() => import("../pages/details"));
const MyPokemons = lazy(() => import("../pages/myPokemon"));

const AppRoutes = () => {
  return (
    <BrowserRouter history={history}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route exact path="/" element={<PageRoute />}>
            <Route exact path="/" element={<Home />} />
            <Route path="/details/:name" element={<Details />} />
            <Route path="/mypokemons" element={<MyPokemons />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
