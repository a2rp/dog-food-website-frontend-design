import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter basename="/dog-food-website-frontend-design">
            <App />
        </BrowserRouter>
    </React.StrictMode>,
);
