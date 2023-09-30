import css from "./ImageGalleryItem.module.css";


export const ImageGalleryItem = props => {
  
  const { id, tags, imageAddress, webformatURL, largeImageURL } = props;
  
  return (
    <li
      className={css.image}
      key={id}
      value={id}
      onClick={() => {
        imageAddress(largeImageURL);
      }}
    >
      <img src={webformatURL} alt={tags} className={css.card} />
    </li>
  )
}