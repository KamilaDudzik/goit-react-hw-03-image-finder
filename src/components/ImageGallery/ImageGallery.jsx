import css from "./ImageGallery.module.css";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({ images, imageAd }) => {

    return (
        <ul className={css.gallery}>
            {images.map(image => {
                const { id, tags, webFormatURL, largeImageURl } = image;
                return (
                    <ImageGalleryItem
                        key={id}
                        id={id}
                        tags={tags}
                        webFormatURL={webFormatURL}
                        largeImageURl={largeImageURl}
                        imageAd={imageAd}
                    />
                )
            })}
        </ul>
    )
}