import { Component } from 'react';
import { GlobalStyles } from './GlobalStyles/GlobalStyles';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { searchImages } from './Api/Api';
import Notiflix from 'notiflix';

export class App extends Component {
  state = {
    query: '',
    images: [],
    currentPage: 1,
    shouldRenderButton: false,
    perPage: 12,
    isLoading: false,
    isModalOpen: false,
    selectedImage: {},
  };

  // Update query for Load More

  updateQuery = query => {
    this.setState({ query });
  };

  // Main Request Function

  onSubmit = async query => {
    await new Promise(resolve => {
      this.setState(
        {
          images: [],
          currentPage: 1,
          isLoading: true,
          shouldRenderButton: false,
        },
        resolve
      );
    });
    try {
      const { currentPage, perPage } = this.state;
      const data = await searchImages(query, currentPage);
      const images = data.hits;
      if (images.length === 0) {
        Notiflix.Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
        return;
      }
      const shouldRenderButton = images.length < data.totalHits;
      this.setState({ images, shouldRenderButton });

      if (data.totalHits <= perPage) {
        Notiflix.Notify.info(
          "We're sorry, but you've reached the end of search results."
        );
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  // Load More Function

  loadMoreImages = async () => {
    const { query, currentPage, perPage } = this.state;
    try {
      this.setState({ isLoading: true });
      const nextPage = currentPage + 1;
      const data = await searchImages(query, nextPage);
      const newImages = data.hits;
      const shouldRenderButton =
        data.totalHits > currentPage * perPage + newImages.length;

      if (!shouldRenderButton) {
        Notiflix.Notify.info(
          "We're sorry, but you've reached the end of search results."
        );
      }

      this.setState(prevState => ({
        images: [...prevState.images, ...newImages],
        currentPage: nextPage,
        shouldRenderButton,
      }));
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  // Open Modal Function

  openModal = image => {
    this.setState({ isModalOpen: true, selectedImage: image });
  };

  // Close  Modal Function

  closeModal = () => {
    this.setState({ isModalOpen: false, selectedImage: {} });
  };

  // Main Render

  render() {
    const { isLoading, isModalOpen, selectedImage } = this.state;
    return (
      <>
        <GlobalStyles />
        <Searchbar onSubmit={this.onSubmit} updateQuery={this.updateQuery} />

        <ImageGallery>
          <ImageGalleryItem
            images={this.state.images}
            openModal={this.openModal}
          />
        </ImageGallery>
        {isLoading ? <Loader /> : null}
        {!isLoading ? (
          <Button
            onClick={this.loadMoreImages}
            shouldRender={this.state.shouldRenderButton}
          />
        ) : null}
        {isModalOpen && Object.keys(selectedImage).length > 0 && (
          <Modal
            isOpen={this.state.isModalOpen}
            image={this.state.selectedImage}
            onClose={this.closeModal}
          />
        )}
      </>
    );
  }
}
