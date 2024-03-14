import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/css/style.css";

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
