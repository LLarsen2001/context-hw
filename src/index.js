import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AccountProvider from "./providers/AccountProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <React.StrictMode>
    <AccountProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </AccountProvider>
  </React.StrictMode>
);