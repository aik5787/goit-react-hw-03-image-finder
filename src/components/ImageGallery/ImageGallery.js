import PropTypes from 'prop-types';
import { ImageGalleryStyle } from './ImageGallery.styled';

export const ImageGallery = ({ children }) => {
  return <ImageGalleryStyle>{children}</ImageGalleryStyle>;
};

ImageGallery.propTypes = {
  children: PropTypes.node.isRequired,
};
