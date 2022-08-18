import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';
import { useState } from 'react';
import Modal from 'components/Modal';

export const ImageGalleryItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = _ => {
    setIsOpen(prevState => !isOpen);
  };
  return (
    <GalleryItem>
      <GalleryItemImage src={item.webformatURL} alt="" onClick={toggleModal} />
      {isOpen && <Modal onClick={toggleModal} modalImg={item.largeImageURL} />}
    </GalleryItem>
  );
};

