import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "./configs/apollo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
