import ReactModal from "react-modal";
import s from "./ImageModal.module.css";
import { FC } from "react";

type ModalData = {
  fullPhotoUrl: string;
  altText: string;
};

type ImageModalProps = {
  isOpen: boolean;
  modalData: ModalData | null;
  onClose: () => void;
};

ReactModal.setAppElement("#root");

const ImageModal: FC<ImageModalProps> = ({ isOpen, modalData, onClose }) => {
  if (!modalData) return null;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={s.modal}
      overlayClassName={s.overlay}
      shouldCloseOnOverlayClick={true}
    >
      <img
        src={modalData.fullPhotoUrl}
        alt={modalData.altText}
        className={s.full_img}
      />
    </ReactModal>
  );
};

const Loader: FC = () => {
  return (
    <div className={s.loader}>
      Loading...
    </div>
  );
};

export { ImageModal, Loader };
