import React from "react";
import { Navbar } from "../../molecule/navbar";
import { Loader } from "../../atom/loader";
import { Toast } from "../../atom/toast";

export const Layout = ({ children, loading, error, success }) => {
  return (
    <>
      <Navbar />
      {loading ? <Loader /> : null}
      {error ? <Toast theme="error" message={error.message} /> : null}
      {success ? <Toast theme="success" message={success.message} /> : null}
      {children}
    </>
  );
};
