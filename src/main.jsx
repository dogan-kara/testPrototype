import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ConfigProvider } from "antd";

import "normalize.css";
import "./main.css";

import "@fontsource/roboto";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/400-italic.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          // colorPrimary: "#1D3544",
          borderRadius: "4px",
          fontFamily: "Roboto",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
