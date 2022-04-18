import React from "react";
import { Navbar } from "../../molecule/navbar";
import { Loader } from "../../atom/loader";
import { Toast } from "../../atom/toast";

export const Layout = ({ children, loading, error }) => {
  return (
    <>
      <Navbar />
      {loading ? <Loader /> : null}
      {error ? <Toast message={error.message} /> : null}
      {children}
    </>
  );
};
