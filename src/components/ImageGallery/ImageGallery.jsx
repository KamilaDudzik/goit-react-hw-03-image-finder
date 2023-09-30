import css from "./ImageGallery.module.css";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({ images, imageAd }) => {

    return (
        <ul>
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