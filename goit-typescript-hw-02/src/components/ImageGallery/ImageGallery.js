import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
const ImageGallery = ({ imagesList, onImageClick }) => {
    return (_jsx(_Fragment, { children: _jsx("ul", { className: s.img_list, children: imagesList.map((image) => (_jsx("li", { children: _jsx(ImageCard, { url: image.urls.small, altText: image.alt_description, onClick: () => onImageClick(image) }) }, image.id))) }) }));
};
export default ImageGallery;
