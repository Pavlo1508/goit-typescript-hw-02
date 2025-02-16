import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { Toaster } from "react-hot-toast";
import App from './App';
import "./index.css";
createRoot(document.getElementById("root")).render(_jsxs(_Fragment, { children: [_jsx(Toaster, {}), _jsx(App, {})] }));
