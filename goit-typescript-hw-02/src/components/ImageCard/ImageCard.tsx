import s from "./ImageCard.module.css";
import { FC } from "react";

type ImageCardProps = {
  url: string;
  altText: string;
  onClick: () => void;
};

const ImageCard: FC<ImageCardProps> = ({ url, altText, onClick }) => {
  return (
    <>
      <img className={s.img} onClick={onClick} src={url} alt={altText} />
    </>
  );
};

export default ImageCard;
