import { useEffect } from 'react';
import { ModalBackdrop, ModalImg } from './Modal.styled';

const Modal = ({ modalImg, onClick }) => {
  
  useEffect(() => {
    window.addEventListener('keydown', closeModal);
    return () => window.removeEventListener('keydown', closeModal);
  });

  const closeModal = e => {
    if (e.key === 'Escape' || e.target === e.currentTarget) {
      onClick();
    }
  };

  return (
    <ModalBackdrop onClick={closeModal}>
      <div>
        <ModalImg src={modalImg} alt="" />
      </div>
    </ModalBackdrop>
  );
};
export default Modal;

