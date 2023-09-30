import css from "./ImageGalleryItem.module.css";

export const ImageGalleryItem = props => {
    const { id, tags, imageAd, webFormatURL, largeImageURL } = props;
    return (
        <li
            key={id}
            value={id}
            onClick={() => {
                imageAd(largeImageURL)
            }}
        >
            <img src={webFormatURL} alt={tags} />
            
        </li>
    )
}