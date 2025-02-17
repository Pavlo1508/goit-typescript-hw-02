import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import s from "./ImageCard.module.css";
const ImageCard = ({ url, altText, onClick }) => {
    return (_jsx(_Fragment, { children: _jsx("img", { className: s.img, onClick: onClick, src: url, alt: altText }) }));
};
export default ImageCard;
