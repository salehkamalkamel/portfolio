import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ActiveSectionProvider } from "./contexts/ActiveSection.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ActiveSectionProvider>
        <App />
      </ActiveSectionProvider>
    </BrowserRouter>
  </React.StrictMode>
);
