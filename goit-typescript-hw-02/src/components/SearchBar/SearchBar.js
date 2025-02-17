import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import s from "./SearchBar.module.css";
import toast from "react-hot-toast";
const SearchBar = ({ onSearchChanged, onSearchClick, }) => {
    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (event) => {
        const value = event.target.value.trim();
        setInputValue(value);
        onSearchChanged(value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue) {
            onSearchClick(inputValue);
        }
        else {
            toast.error("Please enter your request :)");
        }
    };
    return (_jsx("header", { className: s.header, children: _jsxs("form", { onSubmit: handleSubmit, className: s.form, children: [_jsx("input", { className: s.input, type: "text", value: inputValue, onChange: handleInputChange, placeholder: "Enter your request..." }), _jsx("button", { className: s.btn, type: "submit", children: "Search" })] }) }));
};
export default SearchBar;
