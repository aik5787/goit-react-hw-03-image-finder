import PropTypes from 'prop-types';

import { ButtonStyle } from './Button.styled';

export const Button = ({ onClick, shouldRender }) => {
  return shouldRender ? (
    <ButtonStyle type="button" onClick={onClick}>
      Load more
    </ButtonStyle>
  ) : null;
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  shouldRender: PropTypes.bool.isRequired,
};
