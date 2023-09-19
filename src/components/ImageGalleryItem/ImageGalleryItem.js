import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ images }) => {
  return images.map(image => (
    <li key={image.id} className="gallery-item">
      <a href={image.largeImageURL}>
        <img src={image.webformatURL} alt={image.tags} />
      </a>
    </li>
  ));
};

ImageGalleryItem.propTypes = {
  images: PropTypes.array.isRequired,
};
