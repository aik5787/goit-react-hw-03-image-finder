import PropTypes from 'prop-types';

export const Button = ({ onClick, shouldRender }) => {
  return shouldRender ? (
    <button type="button" onClick={onClick}>
      Load more
    </button>
  ) : null;
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  shouldRender: PropTypes.bool.isRequired,
};
