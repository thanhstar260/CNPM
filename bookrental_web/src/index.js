import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);