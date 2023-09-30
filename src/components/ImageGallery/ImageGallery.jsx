import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import css from "./ImageGallery.module.css";

export const ImageGallery = ({ images, imageAddress }) => {
  return (
    <ul className={css.gallery}>
      {images.map(image => {
        const { id, tags, webformatURL, largeImageURL } = image;
        return (
          <ImageGalleryItem
            key={id}
            id={id}
            tags={tags}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            imageAddress={imageAddress}
          />
        );
      })}
    </ul>
  );
};