import { FC } from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

type Image = {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
};

type ImageGalleryProps = {
  imagesList: Image[];
  onImageClick: (image: Image) => void;
};

const ImageGallery: FC<ImageGalleryProps> = ({ imagesList, onImageClick }) => {
  return (
    <>
      <ul className={s.img_list}>
        {imagesList.map((image) => (
          <li key={image.id}>
            <ImageCard
              url={image.urls.small}
              altText={image.alt_description}
              onClick={() => onImageClick(image)}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ImageGallery;
