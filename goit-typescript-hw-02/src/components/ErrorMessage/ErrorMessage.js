import { jsx as _jsx } from "react/jsx-runtime";
import s from "./ErrorMessage.module.css";
const ErrorMessage = () => {
    return (_jsx("div", { children: _jsx("p", { className: s.error, children: "Sorry, we don't have an image for you :( Please change your request." }) }));
};
export default ErrorMessage;
