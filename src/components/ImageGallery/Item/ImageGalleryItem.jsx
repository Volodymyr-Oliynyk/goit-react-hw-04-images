import { Modal } from 'components/Modal/Modal';
import {
  GalleryItem,
  GalleryItemImage,
} from './ImageGalleryItem.styled';
import { Component } from 'react';

 export class ImageGalleryItem extends Component {
  state = {
    isOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    const { item } = this.props;
    return (
      <GalleryItem>
        <GalleryItemImage
          src={item.webformatURL}
          alt=""
          onClick={this.toggleModal}
        />
        {this.state.isOpen && (
          <Modal onClick={this.toggleModal} modalImg={item.largeImageURL} />
        )}
      </GalleryItem>
    );
  }
}

