import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const githubPagesBase = "/dog-food-website-frontend-design";
const isHostedAtRepositoryPath =
    window.location.pathname === githubPagesBase ||
    window.location.pathname.startsWith(`${githubPagesBase}/`);
const basename = isHostedAtRepositoryPath ? githubPagesBase : "/";

root.render(
    <React.StrictMode>
        <BrowserRouter basename={basename}>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
);
