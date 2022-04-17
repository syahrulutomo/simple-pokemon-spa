import React from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

export default function PageRoute({ component: Component, ...rest }) {
  return <Outlet {...rest} render={(props) => <Component {...props} />} />;
}

PageRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.any,
  ]),
};
