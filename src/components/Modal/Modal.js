import { Component } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalStyle } from './Modal.styled';

export class Modal extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    image: PropTypes.shape({
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }),
    onClose: PropTypes.func.isRequired,
  };

  // Lisener mount

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  // Lisener unmount

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  // Close Modal if Escape

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  // Close Modal if click on Overlay

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { isOpen, image } = this.props;

    return (
      isOpen && (
        <Overlay onClick={this.handleBackdropClick}>
          <ModalStyle>
            <img
              src={image.largeImageURL}
              alt={image.tags}
              width="800"
              height="600"
            />
          </ModalStyle>
        </Overlay>
      )
    );
  }
}
