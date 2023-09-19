import PropTypes from 'prop-types';

export const ImageGallery = ({ children }) => {
  return <ul className="gallery">{children}</ul>;
};

ImageGallery.propTypes = {
  children: PropTypes.node.isRequired,
};
