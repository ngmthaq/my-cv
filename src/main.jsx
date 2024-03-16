import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "sweetalert2/src/sweetalert2.scss";
import "./assets/scss/style.scss";

const root = document.getElementById("root");

const Container = () => {
  return <App />;
};

ReactDOM.createRoot(root).render(
  import.meta.env.DEV ? (
    <Container />
  ) : (
    <React.StrictMode>
      <Container />
    </React.StrictMode>
  ),
);
