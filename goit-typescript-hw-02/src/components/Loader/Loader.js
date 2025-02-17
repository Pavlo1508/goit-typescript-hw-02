import { jsx as _jsx } from "react/jsx-runtime";
import ReactModal from "react-modal";
import s from "./Loader.module.css";
ReactModal.setAppElement("#root");
const ImageModal = ({ isOpen, modalData, onClose }) => {
    if (!modalData)
        return null;
    return (_jsx(ReactModal, { isOpen: isOpen, onRequestClose: onClose, className: s.modal, overlayClassName: s.overlay, shouldCloseOnOverlayClick: true, children: _jsx("img", { src: modalData.fullPhotoUrl, alt: modalData.altText, className: s.full_img }) }));
};
const Loader = () => {
    return (_jsx("div", { className: s.loader, children: "Loading..." }));
};
export { ImageModal, Loader };
