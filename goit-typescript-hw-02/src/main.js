import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { createRoot } from 'react-dom/client';
import App from './App';
import "./index.css";
import { StrictMode } from 'react';
createRoot(document.getElementById("root")).render(_jsx(_Fragment, { children: _jsx(StrictMode, { children: _jsx(App, {}) }) }));
